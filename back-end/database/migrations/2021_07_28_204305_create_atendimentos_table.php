<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAtendimentosTable extends Migration
{

    public function up()
    {
        Schema::create('atendimentos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('paciente_id');
            $table->foreign('paciente_id')->references('id')->on('pacientes')->onDelete('cascade');
            $table->unsignedBigInteger('profissional_id');
            $table->foreign('profissional_id')->references('id')->on('profissionals')->onDelete('cascade');
            $table->unsignedBigInteger('procedimento_id');
            $table->foreign('procedimento_id')->references('id')->on('procedimentos')->onDelete('cascade');
            $table->float('valor');
            $table->float('comissao');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('atendimentos');
    }
}
