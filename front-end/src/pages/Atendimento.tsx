import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import api from '../services/api';
import { useHistory, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/atendimento.css';

interface Atendimento {
    profissional_id: number;
    procedimento_id: number;
    valor: number;
    comissao: number;
}

interface PacienteParams {
    id: string;
}

function Atendimento() {
    const params = useParams<PacienteParams>();

    const history = useHistory();

    useEffect(() => {
        console.log(params.id);
    });

    const [model, setModel] = useState<Atendimento>({
        profissional_id: 0,
        procedimento_id: 0,
        valor: 0,
        comissao: 0,
    });

    function uptadeModel(e: ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [e.target.name]: e.target.value,
        });
    }

    async function SubmitForm(e: FormEvent) {
        e.preventDefault();

        const response = await api.post('atendimento', model);

        alert('Atendimento concluído!');

        history.push('/');
    }

    return (
        <ReactBootstrap.Container>
            <h1>Atendimento</h1>

            <h4>Selecione um profissional</h4>
            <ReactBootstrap.Form onSubmit={SubmitForm}>
                <input type="text" value={params.id} />
                <ReactBootstrap.Form.Select
                    aria-label="Default select example"
                    name="profissional_id"
                >
                    <option>Selecione um profissional</option>
                    <option value="1">Diego Anderson Leonardo Monteiro</option>
                    <option value="2">Cecília Aline Cavalcanti</option>
                </ReactBootstrap.Form.Select>

                <h4>Selecione um procedimento</h4>

                <ReactBootstrap.Form.Select
                    aria-label="Default select example"
                    name="procedimento_id"
                >
                    <option>Selecione um procedimento</option>
                    <option value="1">Cirurgia</option>
                    <option value="2">Exame</option>
                    <option value="3">Consulta</option>
                </ReactBootstrap.Form.Select>

                <div id="valores">
                    Comissão:
                    <input type="number" name="comissao" />
                    <br />
                    Valor:
                    <input type="number" name="valor" />
                </div>

                <ReactBootstrap.Button variant="primary" type="submit">
                    Marcar
                </ReactBootstrap.Button>
            </ReactBootstrap.Form>
        </ReactBootstrap.Container>
    );
}

export default Atendimento;
