<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JarmuSeeder extends Seeder {
    public function run(): void {
        $json = file_get_contents(database_path('./seeders/adatok/jarmu.json'));
        $jarmuvek = json_decode($json, true);
        foreach ($jarmuvek as $jarmu) {
            DB::table('jarmu')->insert($jarmu);
        }
    }
}
