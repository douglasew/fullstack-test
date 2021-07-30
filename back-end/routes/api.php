<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AtendimentoController;
use App\Http\Controllers\PacienteController;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Rotas paciente

Route::get('pacientes', [PacienteController::class, 'index']);
Route::post('paciente', [PacienteController::class, 'paciente']);
Route::delete('paciente/{id}', [AtendimentoController::class, 'destroy']);

//Rotas Atendimento

Route::post('atendimento', [AtendimentoController::class, 'atendimento']);
Route::delete('paciente/{id}', [AtendimentoController::class, 'destroy']);
