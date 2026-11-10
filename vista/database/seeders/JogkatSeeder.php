<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JogkatSeeder extends Seeder {
    public function run(): void {
        $json = file_get_contents(database_path('./seeders/adatok/jogkat.json'));
        $jogkatok = json_decode($json, true);
        foreach ($jogkatok as $jogkat) {
            DB::table('jogkat')->insert($jogkat);
        }
    }
}
