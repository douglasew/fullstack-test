<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Paciente;

class PacienteController extends Controller
{
    // Buscar todos os pacientes

    public function index()
    {
        $paciente = Paciente::all();
        return $paciente;
    }

    // Cadastrar um paciente

    public function paciente(Request $request)
    {

        try{
            $paciente = new Paciente();

            $paciente->nome = $request->nome;
            $paciente->telefone = $request-> telefone;

            $paciente->save();

            return response()->json(['success' => true], 200);
        }
        catch(\Exception $error){
            return response()->json(['success' => false, 'error' => $error], 400);
        }
    }

    // Excluir um paciente pelo id 
    
    public function destroy($id)
    {
        
        try{
            $paciente = Paciente::find($id);
            $paciente->delete();

            return ['success'=> true];
        }
        catch(\Exception $error){
            return ['error' => $error];
        }
    }

}
