import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

export default function RespostaSuporte() {

    return (
        <div className="App">
            <Link to="/" className="btn btn-light" id="voltarButton">
                <img alt="botao voltar" src="https://img.icons8.com/material-outlined/24/000000/back--v1.png" />
            </Link>
            <div className="div">
                <button className="btn btn-success" id="salvar" style={{ float: 'right' }}>Salvar</button>
                <div class="conteudo">
                    <div className="divText">
                        <label htmlFor="data">Data:</label>
                        <input type="date" className="data" id="data" />
                    </div>
                    <div className="divSelect">
                        <label htmlFor="cliente">Cliente</label>
                        <select id="cliente" className="cliente">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="divText">
                        <label htmlFor="usuario">Usuario:</label>
                        <input type="text" className="usuario" id="usuario" />
                    </div>
                    <div className="divSelect">
                        <label htmlFor="tipo">Tipo</label>
                        <select id="tipo" className="tipo">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="divSelect">
                        <label htmlFor="sistema">Sistema</label>
                        <select id="sistema" className="sistema">
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
                        <select id="status" className="status">
                            <option value={"Selecionar"}>Selecionar</option>
                            <option value={"Pendente pelo Desenvolvimento"}>Pendente pelo Desenvolvimento</option>
                            <option value={"Concluido"}>Concluído</option>
                            <option value={"Pendente pelo Suporte"}>Pendente pelo Suporte</option>
                            <option value={"Em Análise"}>Em Análise</option>
                            <option value={"Cancelada"}>Cancelada</option>
                        </select>
                    </div>
                </div>
                <div className="divText">
                    <label htmlFor="assunto">Assunto:</label>
                    <input type="text" className="assunto" id="assunto" />
                </div>
            </div >
            <br />
            <div className="div">
                <div className="divText">
                    <label htmlFor="feedback">Feedback para o cliente:</label>
                    <input type="text" className="feedback" id="feedback" />
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