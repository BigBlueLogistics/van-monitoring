<?php

use App\Http\Controllers\YardDocksController;
use Illuminate\Support\Facades\Route;


Route::prefix('yard') ->group(function(){
    Route::get('/', [YardDocksController::class, 'index']);
    Route::get('/status', [YardDocksController::class, 'status']);
});
