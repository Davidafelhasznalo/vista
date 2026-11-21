<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\DB;
use Laravel\Sanctum\HasApiTokens;

class Dolgozo extends Authenticatable {
    use HasApiTokens;

    protected $table = 'dolgozo';
    protected $primaryKey = 'dolgozo_id';
    public $timestamps = false;

    protected $hidden = ['jelszo', 'jelszo_so'];

    public static function dolgozokLekerese() {
        return DB::select("SELECT * FROM dolgozo;");
    }

    public static function emailAlapjanKeres($email) {
        return self::where('email', $email)->first();
    }

    public static function jogkorNeve($jogId) {
        return DB::table('jog')->where('jog_id', $jogId)->value('jogkor_megnevezes');
    }
}