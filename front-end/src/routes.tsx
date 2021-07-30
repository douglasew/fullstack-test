import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Atendimento from './pages/Atendimento';
import Lista from './pages/Lista';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Lista} />
                <Route path="/atendimento/:id" component={Atendimento} />
                <Route path="/cadastrar" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
