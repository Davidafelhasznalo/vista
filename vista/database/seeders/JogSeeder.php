<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JogSeeder extends Seeder {
    public function run(): void {
        $json = file_get_contents(database_path('./seeders/adatok/jog.json'));
        $jogok = json_decode($json, true);
        foreach ($jogok as $jog) {
            DB::table('jog')->insert($jog);
        }
    }
}
