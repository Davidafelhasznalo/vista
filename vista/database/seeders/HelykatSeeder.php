<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HelykatSeeder extends Seeder {
    public function run(): void {
        $json = file_get_contents(database_path('./seeders/adatok/helykat.json'));
        $helykatok = json_decode($json, true);
        foreach ($helykatok as $helykat) {
            DB::table('helykat')->insert($helykat);
        }
    }
}
