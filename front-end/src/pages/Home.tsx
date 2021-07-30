import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import api from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Paciente {
    nome: string;
    telefone: string;
}

function Home() {
    const history = useHistory();

    const [model, setModel] = useState<Paciente>({
        nome: '',
        telefone: '',
    });

    // Adicionando os valores do campo pelo nome

    function uptadeModel(e: ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [e.target.name]: e.target.value,
        });
    }

    // Adicionando os dados no banco e verificando se houve algum erro

    async function SubmitForm(e: FormEvent) {
        e.preventDefault();
        let data;
        try {
            const response = await api.post('paciente', model);
            data = response.data;
        } catch (error) {
            console.log(error);
            data = { success: false };
        }

        console.log(data);
        if (data.success) alert('Cadastro realizado!');
        else alert('Falha no cadastro');

        history.push('/');
    }

    return (
        <Container>
            <h1 style={{ textAlign: 'center' }}>Cadastro paciente</h1>

            <Form onSubmit={SubmitForm}>
                <Form.Group>
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Maria da Silva"
                        name="nome"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            uptadeModel(e)
                        }
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>telefone:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="(82)9999-2222"
                        name="telefone"
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            uptadeModel(e)
                        }
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Proximo
                </Button>
            </Form>
        </Container>
    );
}

export default Home;
