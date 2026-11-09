<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('helykat', function (Blueprint $table) {
            $table->increments('hely_kat_id');
            $table->text('kat_megnevezes');
        });
    }

    // public function down(): void {
    //     Schema::dropIfExists('helykat');
    // }
};
