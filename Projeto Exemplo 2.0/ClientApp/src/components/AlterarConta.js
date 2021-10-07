import React from 'react';
import { Route } from 'react-router';
import Excluir from './ExcluirConta';


export default function Alterar(props) {

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
            var bool = confirm('Tem certeza que deseja excluir sua conta?')
            if (bool == true) {
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
            }
        }
    }


    return (
        <div className="alteracao">
            <form id="form1" runat="server" className="form">
                <label>
                    Nome:
                <input style={{ marginLeft: '1em' }} id="nome" type="text" name="nome" /><br />
                </label>
                <br />
                <label>
                    Novo Senha:
                <input style={{ marginLeft: '1em' }} id="senha" type="password" name="senha" /><br />
                </label>
                <br />
                <button className="btn btn-success" style={{ marginLeft: '4em' }} type="button" onClick={alterar}>Alterar</button>
                <button className="brn brn-danger" style={{ marginLeft: '2em' }} type="button" onClick={excluir}>Excluir Conta</button>

            </form>
        </div>
    )
}