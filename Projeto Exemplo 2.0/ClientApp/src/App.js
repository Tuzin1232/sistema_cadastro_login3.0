import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import './custom.css';
import TokenProvider from './components/TokenContext';
import Login from './components/Login';
import Logoff from './components/Logoff';
import Cadastro from './components/Cadastro';
import Conta from './components/Conta';
import InfoCliente from './components/InfoCliente';
import CadastroCliente from './components/CadastroCliente'
import Suporte from './components/Suporte'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Switch>
                <Route path='/login' component={Login} />
                <Route path="/cadastrar" component={Cadastro} />
                <Route path="/conta" component={Conta} />
                <Route path="/infoCliente" component={InfoCliente} />
                <Route path="/cadastroCliente" component={CadastroCliente} />
                <Route path="/suporte" component={Suporte} />
                <TokenProvider>
                    <Layout>
                        <Route exact path='/' component={Home} />
                        <Route path='/sair' component={Logoff} />
                    </Layout>
                </TokenProvider>
            </Switch>
        );
    }
}
