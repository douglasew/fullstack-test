import React from 'react';
import Routes from './routes';
import './styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import NavBarComp from './components/NavBarComp';
function App() {
    return (
        <BrowserRouter>
            <NavBarComp />
            <Routes />
        </BrowserRouter>
    );
}

export default App;
