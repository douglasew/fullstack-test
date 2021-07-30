<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProcedimentosTable extends Migration
{

    public function up()
    {
        Schema::create('procedimentos', function (Blueprint $table) {
            $table->id();
            $table->string('nome',120);
            $table->float('preco');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('procedimentos');
    }
}
