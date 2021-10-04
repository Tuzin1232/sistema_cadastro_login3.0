import React from 'react';

export default function Cadastro(props) {

    function cadastrar() {
        let senha = document.getElementById('senha').value
        let nomeVar = document.getElementById('nome').value

        if (nomeVar !== '' && senha !== '') {
            alert('cadastrando: ' + nomeVar + " " + senha);
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
            <form id="form1" runat="server" className="form">
                <label>
                    Nome:
                <input style={{ marginLeft: '1em' }} id="nome" type="text" name="nome" /><br />
                </label>
                <br />
                <label>
                    Senha:
                <input style={{ marginLeft: '1em' }} id="senha" type="password" name="senha" /><br />
                </label>
                <br />
                <button className="btn btn-success" style={{ marginLeft: '2em' }} type="button" onClick={cadastrar}>Cadastrar</button>

            </form>
        </div>
    )
}
