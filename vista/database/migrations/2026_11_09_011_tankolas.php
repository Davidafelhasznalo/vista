<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('tankolas', function (Blueprint $table) {
            $table->increments('tankolas_id');
            $table->unsignedInteger('jarmu_id');
            $table->unsignedInteger('dolgozo_id')->nullable();
            $table->integer('megtett_km');
            $table->double('tankolt_liter');
            $table->integer('fizetett');
            $table->date('tankolas_datum');
            $table->double('km_ora_allas');
            
            $table->foreign('jarmu_id')->references('jarmu_id')->on('jarmu')->onDelete('restrict');
            $table->foreign('dolgozo_id')->references('dolgozo_id')->on('dolgozo')->nullOnDelete();
        });
    }

    public function down(): void {
        Schema::dropIfExists('tankolas');
    }
};
