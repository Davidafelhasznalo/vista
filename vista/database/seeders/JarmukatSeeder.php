<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JarmukatSeeder extends Seeder {
    public function run(): void {
        $json = file_get_contents(database_path('./seeders/adatok/jarmukat.json'));
        $jarmukatok = json_decode($json, true);
        foreach ($jarmukatok as $jarmukat) {
            DB::table('jarmukat')->insert($jarmukat);
        }
    }
}
