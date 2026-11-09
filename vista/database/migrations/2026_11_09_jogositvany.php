<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('jogositvany', function (Blueprint $table) {
            $table->increments('vez_eng_id');
            $table->unsignedInteger('kat_id');
            $table->date('lejar_datum');
        });
    }

    // public function down(): void {
    //     Schema::dropIfExists('jogositvany');
    // }
};
