<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('jarmukat', function (Blueprint $table) {
            $table->increments('jarmu_kat_id');            
            $table->unsignedInteger('elvart_kat');
            $table->text('megnevezes');

            $table->foreign('elvart_kat')->references('kat_id')->on('jogkat')->onDelete('restrict');
        });
    }

    public function down(): void {
        Schema::dropIfExists('jarmukat');
    }
};
