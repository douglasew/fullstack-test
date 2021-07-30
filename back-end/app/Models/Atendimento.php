<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Atendimento extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function pacientes(){
        return $this->hasMany('App\Models\Paciente');
    }

    public function Procedimentos(){
        return $this->hasMany('App\Models\Paciente');
    }

    public function Profissionais (){
        return $this->hasMany('App\Models\Paciente');
    }
}
