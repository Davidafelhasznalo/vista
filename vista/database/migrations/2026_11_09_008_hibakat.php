<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('hibakat', function (Blueprint $table) {
            $table->increments('sulyossag_kat_id');
            $table->text('kat_megnevezes');
        });
    }

    public function down(): void {
        Schema::dropIfExists('hibakat');
    }
};
