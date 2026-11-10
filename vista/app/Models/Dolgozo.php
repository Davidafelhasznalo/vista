<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\DB;

class Dolgozo extends Authenticatable {
    public static function dolgozokLekerese() {
        return DB::select("SELECT * FROM dolgozo;");
    }
}
