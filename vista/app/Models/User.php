<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable {
    use HasFactory, Notifiable, HasApiTokens;

    // A saját tábla- és oszlopneveink
    protected $table = 'dolgozo';
    protected $primaryKey = 'dolgozo_id';
    public $timestamps = false;

    protected $fillable = [
        'jog_id',
        'vez_eng_id',
        'jelszo',
        'telszam',
        'email',
        'ker_nev',
        'vez_nev',
    ];

    // Az itt megjelolt mezok nem fognak bekerulni a valasz json-be 
    protected $hidden = [
        'jelszo',
    ];

    protected function casts(): array {
        return [
            'jelszo' => 'hashed',
        ];
    }

    // Megadjuk, hogy az adatbazisban melyik mezo tarolja a jelszavakat
    public function getAuthPasswordName(): string {
        return 'jelszo';
    }

    public function getAuthPassword(): string {
        return $this->jelszo;
    }
}
