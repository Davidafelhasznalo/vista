<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('jogkat', function (Blueprint $table) {
            $table->increments('kat_id');
            $table->text('kategoria');
            $table->text('megnevezes');
        });
    }

    // public function down(): void {
    //     Schema::dropIfExists('jogkat');
    // }
};
