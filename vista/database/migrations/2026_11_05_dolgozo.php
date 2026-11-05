<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('dolgozo', function (Blueprint $table) {
            $table->increments('dolgozo_id');
            $table->unsignedInteger('jog_id');
            $table->unsignedInteger('vez_eng_id');
            $table->text('jelszo');
            $table->text('jelszo_so');
            $table->string('telszam', 255);
            $table->string('email', 255);
            $table->text('ker_nev');
            $table->text('vez_nev');
        });
    }

    // public function down(): void {
    //     Schema::dropIfExists('dolgozo');
    // }
};
