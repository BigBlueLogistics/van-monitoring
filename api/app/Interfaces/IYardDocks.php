<?php

namespace App\Interfaces;

interface IYardDocks
{
    public function index();

    public function getYardStatus();

    public function getDockStatus();
}