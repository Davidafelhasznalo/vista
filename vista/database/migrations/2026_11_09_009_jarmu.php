<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('jarmu', function (Blueprint $table) {
            $table->increments('jarmu_id');
            $table->unsignedInteger('jarmu_kat_id');
            $table->unsignedInteger('park_hely_id')->nullable();
            $table->double('futott_km');
            $table->text('marka');
            $table->text('tipus');
            $table->date('legut_szerviz');
            $table->date('gyartas_idopont');
            $table->integer('terhelhetoseg');
            $table->date('muszaki_lejarat');
            $table->integer('tankterfogat');
            $table->integer('sajat_tomeg');
            $table->char('uzemanyag_tipus');
            $table->char('rendszama');
            $table->char('alvazszam');
            $table->integer('hengerurtartalom');
            $table->integer('max_teljesitmeny');

            $table->foreign('jarmu_kat_id')->references('jarmu_kat_id')->on('jarmukat')->onDelete('restrict');
            $table->foreign('park_hely_id')->references('park_hely_id')->on('parkhely')->nullOnDelete();
        });
    }

    public function down(): void {
        Schema::dropIfExists('jarmu');
    }
};
