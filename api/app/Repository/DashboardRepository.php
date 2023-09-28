<?php

namespace App\Repository;

use App\Interfaces\IDashboard;

class DashboardRepository implements IDashboard
{
    public function index()
    {
        return 'Hallow guys!';
    }
}