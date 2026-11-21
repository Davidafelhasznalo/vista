<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DolgozoSeeder extends Seeder {
    public function run(): void {
        $json = file_get_contents(database_path('./seeders/adatok/dolgozo.json'));
        $dolgozok = json_decode($json, true);
        foreach ($dolgozok as $dolgozo) {
            DB::table('dolgozo')->insert([
                'dolgozo_id' => $dolgozo['dolgozo_id'],
                'jog_id' => $dolgozo['jog_id'],
                'vez_eng_id' => $dolgozo['vez_eng_id'],
                'jelszo' => Hash::make($dolgozo['jelszo']), // bcrypt, a só benne lesz a hash-ben
                'telszam' => $dolgozo['telszam'],
                'email' => $dolgozo['email'],
                'ker_nev' => $dolgozo['ker_nev'],
                'vez_nev' => $dolgozo['vez_nev'],
            ]);
        }
    }
}
