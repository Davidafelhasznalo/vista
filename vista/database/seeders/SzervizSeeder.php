<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SzervizSeeder extends Seeder {
    public function run(): void {
        $json = file_get_contents(database_path('./seeders/adatok/szerviz.json'));
        $szervizek = json_decode($json, true);
        foreach ($szervizek as $szerviz) {
            DB::table('szerviz')->insert($szerviz);
        }
    }
}
