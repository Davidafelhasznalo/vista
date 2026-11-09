<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('jog', function (Blueprint $table) {
            $table->increments('jog_id');
            $table->text('jogkor_megnevezes');
        });
    }

    // public function down(): void {
    //     Schema::dropIfExists('jog');
    // }
};
