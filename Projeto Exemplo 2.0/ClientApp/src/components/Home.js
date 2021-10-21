import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import "./home.css";

export default function Cliente(props) {
    const [id] = useState("");
    const [nome] = useState("");
    const [cookies] = useCookies(['access_token']);

    function redirect(id) {
        window.location.href = "/infoCliente/" + id
    }

    async function postData(url = '') {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        return response.json();
    }

    postData('api/cliente/clientes')
        .then(data => {
            let tabela = document.getElementById("tabela")
            for (var i = 0; i < data.length; i++) {
                var tr = document.createElement("tr")
                var nome = document.createElement("td")
                var id = document.createElement("td")
                var link = document.createElement("td")
                nome.innerHTML = data[i].nome
                id.innerHTML = data[i].id
                link.innerHTML = data[i].link
                link.onclick = {redirect}
                tr.appendChild(nome)
                tr.appendChild(id)
                tr.appendChild(link)
                tabela.appendChild(tr)
            }
            console.log(data);
        });

    return (
        <div className="div">
            <h1>Clientes</h1>
            <br />
            <table id="tabela" style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>
                            Nome
                        </th>
                        <th>
                            ID
                        </th>
                        <th>
                            Link
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {nome}
                        </td>
                        <td>
                            {id}
                        </td>
                        <td>
                            <button onClick={redirect} className="btn btn-primary">Acessar Informações</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}