<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ParkhelySeeder extends Seeder {
    public function run(): void {
        $json = file_get_contents(database_path('./seeders/adatok/parkhely.json'));
        $parkhelyek = json_decode($json, true);
        foreach ($parkhelyek as $parkhely) {
            DB::table('parkhely')->insert($parkhely);
        }
    }
}
