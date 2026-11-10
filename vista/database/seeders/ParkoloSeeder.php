<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ParkoloSeeder extends Seeder {
    public function run(): void {
        $json = file_get_contents(database_path('./seeders/adatok/parkolo.json'));
        $parkolok = json_decode($json, true);
        foreach ($parkolok as $parkolo) {
            DB::table('parkolo')->insert($parkolo);
        }
    }
}
