<?php

namespace App\Http\Controllers;

use App\Models\Paciente;
use App\Models\Atendimento;

use Illuminate\Http\Request;

class AtendimentoController extends Controller
{
    
    // Fazer um novo atendimento 

    public function atendimento(Request $request){

        try{
            $atendimento = new Atendimento();

            $atendimento->paciente_id = $request->paciente_id;
            $atendimento->profissional_id = $request->profissional_id;
            $atendimento->procedimento_id = $request-> procedimento_id;
            $atendimento->valor = $request-> valor;
            $atendimento->comissao = $request-> comissao;

            $atendimento->save();

            return response()->json(['success' => true], 200);
        }
        catch(\Exception $error){
            return response()->json(['success' => false, 'error' => $error], 400);
        }
            
    }

    // Excluir atendimento

    public function destroy($id)
    {

        try{
            $atendimento = Atendimento::find($id);
            $atendimento->delete();

            return ['success'=> true];
        }
        catch(\Exception $error){
            return ['error' => $error];
        }
    }
    
}
