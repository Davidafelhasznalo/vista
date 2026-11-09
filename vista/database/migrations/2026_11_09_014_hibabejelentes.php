<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('hibabejelentes', function (Blueprint $table) {
            $table->increments('hiba_id');
            $table->unsignedInteger('jarmu_id');
            $table->unsignedInteger('dolgozo_id');
            $table->unsignedInteger('sulyossag_kat_id');
            $table->date('bejelentes_datum');
            $table->date('felbukkanas_datum');
            $table->text('leiras');
            $table->text('jav_allapot');

            $table->foreign('jarmu_id')->references('jarmu_id')->on('jarmu')->onDelete('cascade');
            $table->foreign('dolgozo_id')->references('dolgozo_id')->on('dolgozo')->onDelete('cascade');
            $table->foreign('sulyossag_kat_id')->references('sulyossag_kat_id')->on('hibakat')->onDelete('cascade');  // onDelete('cascade') <-- ha egy hibakat torlesre kerul, akkor automatikusan torlesre kerulnek a hozza tartozo (konkret) bejelentett hibak is 
        });
    }

    // public function down(): void {
    //     Schema::dropIfExists('hibabejelentes');
    // }
};
