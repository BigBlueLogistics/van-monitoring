<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Support\SapRfc;
use App\Interfaces\IDashboard;
use App\Repository\DashboardRepository;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind('sap-rfc', function() {
            return new SapRfc('prd','Local');
        });
        $this->app->bind(IDashboard::class, DashboardRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
