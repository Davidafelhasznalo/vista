<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class HibakatSeeder extends Seeder {
    public function run(): void {
        $json = file_get_contents(database_path('./seeders/adatok/hibakat.json'));
        $hibakatok = json_decode($json, true);
        foreach ($hibakatok as $hibakat) {
            DB::table('hibakat')->insert($hibakat);
        }
    }
}
