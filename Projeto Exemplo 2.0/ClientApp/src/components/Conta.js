import React from 'react';
import { Link } from 'react-router-dom';


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
            <div className="alteracao">
                <Link to="/" className="btn btn-light" id="voltarButton">
                <img src="https://img.icons8.com/material-outlined/24/000000/back--v1.png" />
                </Link>
                <form id="form1" runat="server" className="form">
                    <label>
                        Nome:
                <input id="nome" type="text" name="nome" /><br />
                    </label>
                    <br />
                    <label>
                        Nova Senha:
                <input id="senha" type="password" name="senha" /><br />
                    </label>
                    <br />
                    <button className="btn btn-success" type="button" onClick={alterar}>Alterar</button>
                    <button className="btn btn-danger" style={{ marginLeft: '2em' }} type="button" onClick={excluir}>Excluir conta</button>
                    <br />

                </form>
            </div>
        </div>
    )
}



