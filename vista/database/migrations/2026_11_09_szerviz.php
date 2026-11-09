<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('szerviz', function (Blueprint $table) {
            $table->increments('szerviz_id');
            $table->unsignedInteger('jarmu_id');
            $table->text('szerviz_nev');
            $table->date('jav_kezd_datum');
            $table->date('jav_bef_datum');
            $table->text('javitott');
            $table->integer('javitas_ar');
        });
    }

    // public function down(): void {
    //     Schema::dropIfExists('szerviz');
    // }
};
