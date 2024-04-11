<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Support\SapRfc;
use App\Interfaces\IYardDocks;
use App\Repository\YardDocksRepository;

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
        $this->app->bind(IYardDocks::class, YardDocksRepository::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
