<?php

namespace App\Repository;

use App\Interfaces\IYardDocks;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Query\Builder;

class YardDocksRepository implements IYardDocks
{
    public function index()
    {
        return 'Hallow guys!';
    }

    public function getYardStatus()
    {
        // container yard 1 & 2
        $yard12 = DB::connection('wms')->table('VANS')
            ->selectRaw('vans.vnmbr AS vanNo, vans.vmrno, 
                vans.vtype AS type, vans.vsize AS size , UPPER(vans.pstat) AS pluggedStatus,
                vans.adatu AS arrivalDate, vans.odatu AS outDate, vans.werks AS location,
                vans.whdat AS whDate, vans.cstat AS currentStatus, vans.astat AS arrivalStatus,
                vans.wschd AS whSchedule, dcks.dknum')
            ->leftJoin('DCKS', 'vans.vmrno', '=','dcks.vmrno')
            ->whereNull('vans.odatu')
            ->whereNotIn('vans.werks', ['BB01', 'BB02','BB04', 'BB05'])
            ->where('dcks.dknum', '>', 0)
            ->where('dcks.dknum', '<', 45)
            ->orderBy('dcks.dknum', 'asc')
            ->get();

        // container yard 3
        $yard3 = DB::connection('wms')->table('VANS')
            ->selectRaw('vans.vnmbr AS vanNo, vans.vmrno, 
                vans.vtype AS type, vans.vsize AS size , UPPER(vans.pstat) AS pluggedStatus,
                vans.adatu AS arrivalDate, vans.odatu AS outDate, vans.werks AS location,
                vans.whdat AS whDate, vans.cstat AS currentStatus, vans.astat AS arrivalStatus,
                vans.wschd AS whSchedule, dcks.dknum')
            ->leftJoin('DCKS', 'vans.vmrno', '=','dcks.vmrno')
            ->whereNull('vans.odatu')
            ->whereNotIn('vans.werks', ['BB01', 'BB02','BB04', 'BB05'])
            ->where('dcks.dknum', '>', 44)
            ->where('dcks.dknum', '<', 73)
            ->orderBy('dcks.dknum', 'asc')
            ->get();

        // container yard 4
        $yard4 = DB::connection('wms')->table('VANS')
            ->selectRaw('vans.vnmbr AS vanNo, vans.vmrno, 
                vans.vtype AS type, vans.vsize AS size , UPPER(vans.pstat) AS pluggedStatus,
                vans.adatu AS arrivalDate, vans.odatu AS outDate, vans.werks AS location,
                vans.whdat AS whDate, vans.cstat AS currentStatus, vans.astat AS arrivalStatus,
                vans.wschd AS whSchedule, dcks.dknum')
            ->leftJoin('DCKS', 'vans.vmrno', '=','dcks.vmrno')
            ->whereNull('vans.odatu')
            ->whereNotIn('vans.werks', ['BB01', 'BB02','BB04', 'BB05'])
            ->where('dcks.dknum', '>', 72)
            ->where('dcks.dknum', '<', 94)
            ->orderBy('dcks.dknum', 'asc')
            ->get();

            // Vehicle status
            $vehicle = $this->getVehicleStatus('yard');
    

        return [
            'yard1' => ['Container Yard 1 & 2', $yard12],
            'yard3' => ['Container Yard 3', $yard3],
            'yard4' => ['Container Yard 4', $yard4],
            'vehicle' => ['Dock to Doors', $vehicle],
        ];
    }

    public function getDockStatus()
    {
        // BB05 Docks
        $dock5 = DB::connection('wms')->table('VANS')
            ->selectRaw('vans.vnmbr AS vanNo, vans.vmrno, 
                vans.vtype AS type, vans.vsize AS size , UPPER(vans.pstat) AS pluggedStatus,
                vans.adatu AS arrivalDate, vans.odatu AS outDate, vans.werks AS location,
                vans.whdat AS whDate, vans.cstat AS currentStatus, vans.astat AS arrivalStatus,
                vans.wschd AS whSchedule, dcks.dknum')
            ->leftJoin('DCKS', 'vans.vmrno', '=','dcks.vmrno')
            ->whereNull('vans.odatu')
            ->where('vans.werks', '=', 'BB05')
            ->orderBy('dcks.dknum', 'asc')
            ->get();

        // BB08 Docks
        $dock8 = DB::connection('wms')->table('VANS')
            ->selectRaw('vans.vnmbr AS vanNo, vans.vmrno, 
                vans.vtype AS type, vans.vsize AS size , UPPER(vans.pstat) AS pluggedStatus,
                vans.adatu AS arrivalDate, vans.odatu AS outDate, vans.werks AS location,
                vans.whdat AS whDate, vans.cstat AS currentStatus, vans.astat AS arrivalStatus,
                vans.wschd AS whSchedule, dcks.dknum')
            ->leftJoin('DCKS', 'vans.vmrno', '=','dcks.vmrno')
            ->whereNull('vans.odatu')
            ->where('vans.werks', '=', 'BB08')
            ->orderBy('dcks.dknum', 'asc')
            ->get();

        // Customer
        $customer = DB::connection('wms')->table('BARRIER_USERS')
            ->selectRaw('rfid_num, vehicle_type, plate_num, time_in, company')
            ->whereNotNull('time_in')
            ->whereNull('time_out')
            ->where('depart', '=', '3rd-Party Trucks')
            ->groupBy('rfid_num', 'vehicle_type', 'plate_num', 'time_in', 'company')
            ->orderBy('time_in','desc')
            ->get();

        // Vehicle status
        $vehicle = $this->getVehicleStatus('docks');

        return [
            'dock5' => ['BB05 Docking Area', $dock5],
            'dock8' => ['BB08 Docking Area', $dock8],
            'customer' => ['Customer', $customer],
            'vehicle' => ['Shift to Yard', $vehicle],
        ];
    
    }

    public function getVehicleStatus($location)
    {
        $isYard = $location === "yard";

        $vehicle = DB::connection('wms')->table('VANS')
            ->selectRaw('vans.vnmbr AS vanNo, vans.vmrno, 
                vans.vtype AS type, vans.vsize AS size , UPPER(vans.pstat) AS pluggedStatus,
                vans.adatu AS arrivalDate, vans.odatu AS outDate, vans.werks AS location,
                vans.whdat AS whDate, vans.cstat AS currentStatus, vans.astat AS arrivalStatus,
                vans.wschd AS whSchedule, dcks.dknum')
            ->join('DCKS', 'vans.vmrno', '=','dcks.vmrno')
            ->whereNull('vans.odatu')
            ->whereNotNull('vans.actrq')
            ->when($isYard, function(Builder $query){
                // Dock to Doors
                $query->where('dcks.werks', '=', 'YARD');
                
            }, function(Builder $query){
                // Shift to Yard
                $query->where('dcks.werks', '!=', 'YARD');
            })
            ->orderBy('dcks.dknum', 'asc')
            ->get();

        return $vehicle;
    }
}