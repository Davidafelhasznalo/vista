<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

// Nyilvános útvonal: bárki elérheti (nincs még token)
Route::post('/login', [AuthController::class, 'login']);

// Védett útvonalak: csak érvényes tokennel érhetők el
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);

    // Ide jönnek később a járműves végpontok, pl.:
    // Route::apiResource('vehicles', VehicleController::class);
});
