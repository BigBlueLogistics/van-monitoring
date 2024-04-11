<?php

use App\Http\Controllers\YardDocksController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::prefix('yard') ->group(function(){
    Route::get('/', [YardDocksController::class, 'index']);
    Route::get('/status', [YardDocksController::class, 'status']);
});
