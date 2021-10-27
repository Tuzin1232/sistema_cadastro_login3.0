import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Cadastro(props) {

    function cadastrar() {
        let senha = document.getElementById('senha').value
        let nomeVar = document.getElementById('nome').value
        if (nomeVar !== '' && senha !== '') {
            alert('Cadastrando: ' + nomeVar + " " + senha);
            const requestOptions = {

                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nome: nomeVar,
                    senha: senha,
                })
            };

            fetch('api/account/cadastrar', requestOptions).then((response) => {

                if (response.ok) {
                    response.text().then(r => alert(r));
                } else {
                    response.text().then(r => alert(r));
                }
            });

        } else {
            window.alert("Preencha todos os campos!")
        }
    }

    return (
        <div className="cadastro">
            <div className="div">
                <form id="form1" runat="server" className="form">
                    <TextField id="nome" label="Nome:" variant="outlined" />
                    <br />
                    <TextField id="senha" type="password" label="Senha:" variant="outlined" />
                    <br />
                    <Button variant="contained" color="success" onClick={cadastrar}>
                        CADASTRAR
                    </Button>
                    <br />
                    <p>Já possui uma conta?</p>
                    <Link className="btn btn-info" to="/login">LOGAR</Link>
                </form>
            </div>
        </div>
    )
}
