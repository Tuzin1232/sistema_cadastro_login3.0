import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Conta(props) {

    function alterar() {
        let senha = document.getElementById('senha').value
        let nomeVar = document.getElementById('nome').value

        if (nomeVar !== '' && senha !== '') {
            alert('Alterarando: ' + nomeVar + " " + senha);
            const requestOptions = {

                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nome: nomeVar,
                    senha: senha,
                })
            };

            fetch('api/account/alterar', requestOptions).then((response) => {

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

    function excluir() {
        let senha = document.getElementById('senha').value
        let nomeVar = document.getElementById('nome').value

        if (nomeVar !== '' && senha !== '') {
            if (window.confirm('Tem certeza que deseja excluir sua conta?')) {
                const requestOptions = {

                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        nome: nomeVar,
                        senha: senha,
                    })
                };

                fetch('api/account/excluir', requestOptions).then((response) => {

                    if (response.ok) {
                        response.text().then(r => alert(r));
                    } else {
                        response.text().then(r => alert(r));
                    }
                });
                window.location.href = "/cadastrar";
            }
        } else {
            alert("Preencha todos os campos")
        }

    }
    return (
        <div className="App">
            <Link to="/" className="btn btn-light" id="voltarButton">
                <img alt="botao voltar" src="https://img.icons8.com/material-outlined/24/000000/back--v1.png" />
            </Link>
            <div className="div">
                <form id="form1" runat="server" className="form">
                    <TextField id="nome" label="Nome:" variant="standard" />
                    <br />
                    <TextField id="senha" type="password" label="Senha:" variant="standard" />
                    <br />
                    <Button variant="contained" color="success" onClick={alterar}>Alterar</Button>
                    <br />
                    <Button variant="contained" color="error" onClick={excluir}>Excluir conta</Button>
                </form>
            </div>
        </div>
    )
}



