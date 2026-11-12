<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TankolasSeeder extends Seeder {
    public function run(): void {
        $json = file_get_contents(database_path('./seeders/adatok/tankolas.json'));
        $tankolasok = json_decode($json, true);
        foreach ($tankolasok as $tankolas) {
            DB::table('tankolas')->insert($tankolas);
        }
    }
}
