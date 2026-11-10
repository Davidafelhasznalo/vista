<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DolgozoSeeder extends Seeder {
    public function run(): void {
        $json = file_get_contents(database_path('./seeders/adatok/dolgozo.json'));
        $dolgozok = json_decode($json, true);
        foreach ($dolgozok as $dolgozo) {
            DB::table('dolgozo')->insert($dolgozo);
        }
    }
}
