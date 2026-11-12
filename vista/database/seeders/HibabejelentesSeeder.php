<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HibabejelentesSeeder extends Seeder {
    public function run(): void {
        $json = file_get_contents(database_path('./seeders/adatok/hibabejelentes.json'));
        $hibabejelentesek = json_decode($json, true);
        foreach ($hibabejelentesek as $hibabejelentes) {
            DB::table('hibabejelentes')->insert($hibabejelentes);
        }
    }
}
