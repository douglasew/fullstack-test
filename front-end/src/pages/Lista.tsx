import React, { useEffect, useState } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import api from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

interface Paciente {
    id: number;
    nome: string;
    telefone: string;
}

function Lista() {
    const [pacientes, setPacientes] = useState<Paciente[]>([]);

    useEffect(() => {
        api.get('pacientes').then((response) => {
            setPacientes(response.data);
        });
    }, []);

    return (
        <Container>
            <h1 style={{ textAlign: 'center' }}>Lista de pacientes</h1>
            <Table striped bordered hover>
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th style={{ textAlign: 'center' }}>Procedimento</th>
                    </tr>
                </thead>
                {pacientes.map((paciente) => {
                    return (
                        <tbody>
                            <tr key={paciente.id}>
                                <td>{paciente.id}</td>
                                <td>{paciente.nome}</td>
                                <td>{paciente.telefone}</td>
                                <td style={{ textAlign: 'center' }}>
                                    <Button variant="primary">
                                        <Link
                                            to={`/atendimento/${paciente.id}`}
                                        >
                                            id
                                        </Link>
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    );
                })}
            </Table>
        </Container>
    );
}

export default Lista;
