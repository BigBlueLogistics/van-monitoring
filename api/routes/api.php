<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Private routes
Route::prefix('dashboard') ->group(function(){
    Route::get('/', [DashboardController::class, 'index']);
});
