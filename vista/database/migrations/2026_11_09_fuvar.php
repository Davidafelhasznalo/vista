<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('fuvar', function (Blueprint $table) {
            $table->increments('fuvar_id');
            $table->unsignedInteger('jarmu_id');
            $table->unsignedInteger('dolgozo_id');
            $table->date('indulas_datum');
            $table->date('erkezes_datum');
            $table->double('ora_indulaskor');
            $table->double('ora_erkezeskor');
            $table->integer('bevetel');
            $table->text('leiras');
            $table->boolean('hibamentes_e');
        });
    }

    // public function down(): void {
    //     Schema::dropIfExists('fuvar');
    // }
};
