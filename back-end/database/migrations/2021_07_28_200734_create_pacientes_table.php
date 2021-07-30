<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePacientesTable extends Migration
{

    public function up()
    {
        Schema::create('pacientes', function (Blueprint $table) {

            $table->id();
            $table->string('nome',120);
            $table->string('telefone',120);
            $table->timestamps();


        });
    }

    public function down()
    {
        Schema::dropIfExists('pacientes');
    }
}
