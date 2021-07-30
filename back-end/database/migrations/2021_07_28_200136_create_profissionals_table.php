<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfissionalsTable extends Migration
{

    public function up()
    {
        Schema::create('profissionals', function (Blueprint $table) {
            $table->id();
            $table->string('nome',120);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('profissionals');
    }
}
