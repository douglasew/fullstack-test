<?php

namespace Database\Seeders;

use App\Models\Procedimento;
use App\Models\Profissional;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    
    public function run()
    {
        // Dados dos procedimentos

        Procedimento::create(['nome'=> 'Cirurgia','preco'=> 500.00]);
        Procedimento::create(['nome'=> 'Exame','preco'=> 250.00]);
        Procedimento::create(['nome'=> 'Consulta','preco'=> 150.00]);

        // Dados dos profissionais

        Profissional::create(['nome'=> 'Diego Anderson Leonardo Monteiro']);
        Profissional::create(['nome'=> 'Cecília Aline Cavalcanti']);

    }
}
