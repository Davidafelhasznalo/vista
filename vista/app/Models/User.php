<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\DB;

class User extends Authenticatable {
    use HasFactory, Notifiable, HasApiTokens;

    // A saját tábla- és oszlopneveink
    protected $table = 'dolgozo';
    protected $primaryKey = 'dolgozo_id';
    public $timestamps = false;

    // Az admin jog azonosítója a jog táblában (ellenőrizd az adatbázisban!)
    const ADMIN_JOG_ID = 3;

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

    // Igaz, ha a bejelentkezett dolgozó admin
    public function isAdmin(): bool {
        return (int) $this->jog_id === self::ADMIN_JOG_ID;
    }

    // REGISZTRACIO - meg ki kell szervezni kulon fajlba (most csak proba van)
    public static function regisztracio(int $jog_id, int $vez_eng_id, string $jelszo, string $telszam, string $email, string $ker_nev, string $vez_nev) {
        return DB::table('dolgozo')->insert([
            'jog_id' => $jog_id,
            'vez_eng_id' => $vez_eng_id,
            'jelszo' => password_hash($jelszo, PASSWORD_BCRYPT),
            'telszam' => $telszam,
            'email' => $email,
            'ker_nev' => $ker_nev,
            'vez_nev' => $vez_nev
        ]);
    }

    // SZEREPKOROK - meg ki kell szervezni kulon fajlba (most csak proba van)
    public static function szerepkorok() {
        return DB::table('jog')->select('*')->get();
    }

    // JARMUVEK - meg ki kell szervezni kulon fajlba (most csak proba van)
    public static function jarmuvek() {
        return DB::table('jarmu')->select('*')->get();
    }

    // FUVAROK - meg ki kell szervezni kulon fajlba (most csak proba van)
    public static function fuvarok() {
        return DB::table('fuvar')->select('*')->get();
    }

    // SZERVEIZEK - meg ki kell szervezni kulon fajlba (most csak proba van)
    public static function szervizek() {
        return DB::table('szerviz')->select('*')->get();
    }
}
