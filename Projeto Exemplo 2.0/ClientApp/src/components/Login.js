import React, { useState } from 'react';
import { Redirect, Router } from 'react-router';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function Login(props) {
    const [cookies, setCookie] = useCookies(['access_token'])
    const [nomeUsuario, setNomeUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [redirect, setRedirect] = useState(false);
    let expires = new Date();

    expires.setTime(expires.getTime() + (3 * 60 * 24 * 1000))

    function handleErrors(response) {

        if (!response.ok) {
            response.text().then(r => alert(r));
        } else {

            setCookie('nomeUsuario', nomeUsuario, { path: '/' });

            response.json().then(data => {
                setCookie('access_token', data.token, { path: '/', expires });

            }).then(setRedirect(true));

        }
        return response;
    }
    var initialState = (event) => {

        event.preventDefault();
        event.stopPropagation();

        const requestOptions = {

            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nome: nomeUsuario,
                senha: senha,
            })
        };

        fetch('api/account/login', requestOptions).then(handleErrors);

    };

    if (redirect) {
        return <Redirect push to="/" />;
    }

    return (
        <form id="form1" runat="server" onSubmit={initialState} className="form">
            <div className="div">
                <TextField id="nome" label="Nome:" variant="standard" value={nomeUsuario} onChange={(e) => setNomeUsuario(e.target.value)} />
                <br />
                <TextField id="senha" label="Senha:" variant="standard" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <br />
                <Button variant="contained" color="success" type="submit">
                    Entrar
                </Button>
                <br />
                <p>É novo no site?</p>
                <Link className="btn btn-info" to="/cadastrar">CADASTRAR</Link>
            </div>
        </form>
    );
}
