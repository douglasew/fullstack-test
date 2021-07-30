import { Link } from 'react-router-dom';
import { Button, Form, Container, Navbar, Nav } from 'react-bootstrap';

function NavbarComp() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link href="/">pacientes</Nav.Link>
                <Nav.Link href="/cadastrar">Cadastro</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavbarComp;
