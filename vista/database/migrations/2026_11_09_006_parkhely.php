<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('parkhely', function (Blueprint $table) {
            $table->increments('park_hely_id');            
            $table->unsignedInteger('parkolo_id');
            $table->unsignedInteger('hely_kat_id');
            $table->text('megnevezes');
                        
            $table->foreign('parkolo_id')->references('parkolo_id')->on('parkolo')->onDelete('cascade');
            $table->foreign('hely_kat_id')->references('hely_kat_id')->on('helykat')->onDelete('cascade');
        });
    }

    // public function down(): void {
    //     Schema::dropIfExists('parkhely');
    // }
};
