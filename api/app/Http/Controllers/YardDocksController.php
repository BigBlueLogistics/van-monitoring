<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\YardDocksRequest;
use App\Traits\HttpResponse;
use App\Interfaces\IYardDocks;


class YardDocksController extends Controller
{
    use HttpResponse;

    private $yard;

    public function __construct(IYardDocks $yard)
    {
        $this->yard = $yard;
    }

    public function index()
    {
        try {
            $res = $this->yard->index();

            return $this->sendResponse($res);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
        
    }

    public function status(YardDocksRequest $request)
    {
        try {
            $type = $request->input('type');
            $res = null;
            
            if($type === 'yard')
            {
                $res = $this->yard->getYardStatus();
            }

            if($type === 'docks')
            {
                $res = $this->yard->getDockStatus();
            }

            return $this->sendResponse($res);
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }
}
