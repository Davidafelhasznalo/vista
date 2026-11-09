<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('parkolo', function (Blueprint $table) {
            $table->increments('parkolo_id');
            $table->text('park_nev');
            $table->integer('park_hely_szam');
        });
    }

    // public function down(): void {
    //     Schema::dropIfExists('parkolo');
    // }
};
