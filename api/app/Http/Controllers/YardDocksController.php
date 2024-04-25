<?php

namespace App\Http\Controllers;

use App\Http\Requests\YardDocksRequest;
use App\Traits\HttpResponse;
use App\Interfaces\IYardDocks;
use Exception;

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
            $location = $request->input('location');
            $res = null;
            
            if($location === 'yard')
            {
                $res = $this->yard->getYardStatus();
            }

            if($location === 'docks')
            {
                $res = $this->yard->getDockStatus();
            }

            return $this->sendResponse($res, 'yard and vans status');
        } catch (Exception $e) {
            return $this->sendError($e->getMessage());
        }
    }
}
