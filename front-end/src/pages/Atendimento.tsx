import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Container, Form, Button, FormCheck } from 'react-bootstrap';
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

//Buscando o id do paciente no Parâmetros
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

    // Adicionando os valores pelo nome

    function uptadeModel(e: ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [e.target.name]: e.target.value,
        });
    }

    //Enviando os dados para o banco

    async function SubmitForm(e: FormEvent) {
        e.preventDefault();

        const response = await api.post('atendimento', model);

        alert('Atendimento concluído!');

        history.push('/');
    }

    return (
        <Container>
            <h1 style={{ textAlign: 'center' }}>Atendimento</h1>

            <Form onSubmit={SubmitForm}>
                <Form.Group>
                    <Form.Label>Paciente ID:</Form.Label>
                    <Form.Control
                        type="number"
                        name="paciente_id"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            uptadeModel(e)
                        }
                    />
                </Form.Group>

                <Form.Label>Profissional:</Form.Label>

                <Form.Check
                    type="radio"
                    label="Diego Anderson Leonardo Monteiro"
                    name="profissional_id"
                    value="1"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        uptadeModel(e)
                    }
                />
                <Form.Check
                    type="radio"
                    label="Cecília Aline Cavalcanti"
                    name="profissional_id"
                    value="2"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        uptadeModel(e)
                    }
                />

                <Form.Label>Procedimento:</Form.Label>

                <Form.Check
                    type="radio"
                    label="Cirurgia"
                    name="procedimento_id"
                    value="1"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        uptadeModel(e)
                    }
                />
                <Form.Check
                    type="radio"
                    label="Exame"
                    name="procedimento_id"
                    value="2"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        uptadeModel(e)
                    }
                />
                <Form.Check
                    type="radio"
                    label="Consulta"
                    name="procedimento_id"
                    value="3"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        uptadeModel(e)
                    }
                />

                <Form.Group>
                    <Form.Label>Valor:</Form.Label>
                    <Form.Control
                        id="valor"
                        type="number"
                        name="valor"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            uptadeModel(e)
                        }
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Comissão:</Form.Label>
                    <Form.Control
                        type="number"
                        id="comissao"
                        name="comissao"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            uptadeModel(e)
                        }
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Confirmar
                </Button>
            </Form>
        </Container>
    );
}

export default Atendimento;
