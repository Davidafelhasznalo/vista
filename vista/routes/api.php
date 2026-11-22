<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthController::class, 'login']);

// vegett utvonalak, csak bejelenkezes utan valnak elerhetove
Route::middleware('auth:sanctum')->group(function () {  
    Route::get('/user', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);

    Route::middleware('admin')->group(function () {
        Route::get('/admin/test', function () {
            return response()->json(['message' => 'Admin vagy, a belépés engedélyezett.']);
        });
    });
});
