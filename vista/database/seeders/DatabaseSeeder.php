<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
    public function run(): void {
        $this->call([
            JogSeeder::class,
            JogkatSeeder::class,
            ParkoloSeeder::class,
            HelykatSeeder::class,
            JarmukatSeeder::class,
            ParkhelySeeder::class,
            JogositvanySeeder::class,
            HibakatSeeder::class,
            DolgozoSeeder::class,
            JarmuSeeder::class,
            TankolasSeeder::class,
            FuvarSeeder::class,
            SzervizSeeder::class,
            HibabejelentesSeeder::class
        ]);
    }
}
