<?php

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Route;

Route::get('/dolgozok', [Controller::class, 'osszesDolgozo']);
