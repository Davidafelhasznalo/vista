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

    // Ezek nem kerülnek ki a JSON válaszba
    protected $hidden = [
        'jelszo',
    ];

    // A React a user.name mezőt használja, ezért ezt is visszaküldjük
    protected $appends = ['name'];

    protected function casts(): array {
        return [
            // Mentéskor automatikusan bcrypt hash-t készít,
            // ha a mező még nincs hash-elve
            'jelszo' => 'hashed',
        ];
    }

    // Megmondjuk a Laravelnek, melyik oszlop tárolja a jelszót
    public function getAuthPasswordName(): string {
        return 'jelszo';
    }

    public function getAuthPassword(): string {
        return $this->jelszo;
    }

    // Teljes név: vezetéknév + keresztnév
    public function getNameAttribute(): string {
        return trim($this->vez_nev . ' ' . $this->ker_nev);
    }
}
