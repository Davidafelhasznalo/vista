<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JogositvanySeeder extends Seeder {
    public function run(): void {
        $json = file_get_contents(database_path('./seeders/adatok/jogositvany.json'));
        $jogositvanyok = json_decode($json, true);
        foreach ($jogositvanyok as $jogositvany) {
            DB::table('jogositvany')->insert($jogositvany);
        }
    }
}
