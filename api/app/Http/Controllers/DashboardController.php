<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\HttpResponse;
use App\Interfaces\IDashboard;

class DashboardController extends Controller
{
    use HttpResponse;

    private $dashboard;

    public function __construct(IDashboard $dashboard)
    {
        $this->dashboard = $dashboard;
    }

    public function index()
    {
        try {
            $res = $this->dashboard->index();

            return $this->sendResponse($res);
        } catch (\Throwable $th) {
            return $this->sendError($th->getMessage());
        }
        
    }
}
