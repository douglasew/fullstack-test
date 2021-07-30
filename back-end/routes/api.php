<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AtendimentoController;
use App\Http\Controllers\PacienteController;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('pacientes', [PacienteController::class, 'index']);
Route::post('paciente', [PacienteController::class, 'paciente']);
Route::post('atendimento', [AtendimentoController::class, 'atendimento']);
Route::get('atendimento/{id}', [AtendimentoController::class, 'show']);
Route::delete('paciente/{id}', [AtendimentoController::class, 'destroy']);
