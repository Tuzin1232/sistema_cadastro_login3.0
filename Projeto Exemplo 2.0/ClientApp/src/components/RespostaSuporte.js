import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import './home.css';

export default function RespostaSuporte() {
    const [id] = useState(0);
    const [cookies] = useCookies(['access_token']);

    const [data] = useState("");
    const [cliente] = useState("");
    const [usuario] = useState("");
    const [tipo] = useState("");
    const [sistema] = useState("");
    const [status, setStatus] = useState("");
    const [responsavel, setResponsavel] = useState("");
    const [assunto, setAssunto] = useState("");
    const [feedback, setFeedback] = useState("");

    return (
        <div className="App">
            <Link to="/" className="btn btn-light" id="voltarButton">
                <img alt="botao voltar" src="https://img.icons8.com/material-outlined/24/000000/back--v1.png" />
            </Link>
            <div className="div">
                <button className="btn btn-success" id="salvar" style={{ float: 'right' }}>Salvar</button>
                <div class="conteudo">
                    <div className="container">
                        <div className="divText">
                            <label htmlFor="data">Data:</label>
                            <input type="date" className="data" id="data" value={data} />
                        </div>
                        <div className="divSelect">
                            <label htmlFor="cliente">Cliente</label>
                            <select id="cliente" className="cliente" value={cliente}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="divText">
                            <label htmlFor="usuario">Usuario:</label>
                            <input type="text" className="usuario" id="usuario" value={usuario} />
                        </div>
                        <div className="divSelect">
                            <label htmlFor="tipo">Tipo</label>
                            <select id="tipo" className="tipo" value={tipo}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="divSelect">
                            <label htmlFor="sistema">Sistema</label>
                            <select id="sistema" className="sistema" value={sistema}>
                                <option value={"Assistência Social"}>Assistência Social</option>
                                <option value={"CRM"}>CRM</option>
                                <option value={"Educação"}>Educação</option>
                                <option value={"Portal Cidadão"}>Portal Cidadão</option>
                                <option value={"S-Commerce"}>S-Commerce</option>
                                <option value={"SADM"}>SADM</option>
                                <option value={"SAS"}>SAS</option>
                                <option value={"Saúde"}>Saúde</option>
                                <option value={"SCA"}>SCA</option>
                                <option value={"SCA/SAS"}>SCA/SAS</option>
                                <option value={"SE"}>SE</option>
                            </select>
                        </div>
                        <div className="divSelect">
                            <label htmlFor="status">Status</label>
                            <select id="status" className="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                                <option value={"Selecionar"}>Selecionar</option>
                                <option value={"Pendente pelo Desenvolvimento"}>Pendente pelo Desenvolvimento</option>
                                <option value={"Concluido"}>Concluído</option>
                                <option value={"Pendente pelo Suporte"}>Pendente pelo Suporte</option>
                                <option value={"Em Análise"}>Em Análise</option>
                                <option value={"Cancelada"}>Cancelada</option>
                            </select>
                        </div>
                        <div className="divText">
                            <label htmlFor="responsavel">Responsável:</label>
                            <input type="text" className="responsavel" id="responsavel" value={responsavel} onChange={(e) => setResponsavel(e.target.value)} />
                        </div>
                        <div className="divText">
                            <label htmlFor="assunto">Assunto:</label>
                            <input type="text" className="assunto" id="assunto" value={assunto} onChange={(e) => setAssunto(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div >
            <br />
            <div className="div">
                <div className="divText">
                    <label htmlFor="feedback">Feedback para o cliente:</label>
                    <input type="text" className="feedback" id="feedback" value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                </div>
            </div>
            <br />
            <div className="div">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Pergunta</th>
                            <th>Resposta</th>
                            <th>Técnico</th>
                            <th>Data Pergunta</th>
                            <th>Data Resposta</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
                <div className="conteudo">
                    <input type="file" />
                </div>
            </div>
        </div >
    )
}