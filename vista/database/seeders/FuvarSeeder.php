<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FuvarSeeder extends Seeder {
    public function run(): void {
        $json = file_get_contents(database_path('./seeders/adatok/fuvar.json'));
        $fuvarok = json_decode($json, true);
        foreach ($fuvarok as $fuvar) {
            DB::table('fuvar')->insert($fuvar);
        }
    }
}
