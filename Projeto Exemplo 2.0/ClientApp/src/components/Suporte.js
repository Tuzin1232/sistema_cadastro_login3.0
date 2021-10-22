import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';



export default function Suporte() {

    return (
        <div className="App">
            <Link to="/" className="btn btn-light" id="voltarButton">
                <img alt="botao voltar" src="https://img.icons8.com/material-outlined/24/000000/back--v1.png" />
            </Link>
            <div className="div">
                <h1>Suporte ao Cliente</h1>
            </div>
            <br />
            <div className="div">
                <button type="button" className="btn btn-primary" id="novoAtendimento" style={{ float: 'left' }}> Novo atendimento </button>
                <div className="divText" style={{ float: 'right' }} >
                    <label htmlFor="registrosTotal">Registros Totais:</label>
                    <input type="number" className="registrosTotal" id="registrosTotal" value="XX" />
                </div>
                <div className="conteudo">
                    <div className="divCheckBox">
                        <label htmlFor="internos"> Mostrar Internos </label>
                        <br />
                        <input type="checkbox" className="check" id="internos" />
                    </div>
                    <div className="divCheckBox">
                        <label htmlFor="concluido"> Mostrar Concluídos </label>
                        <br />
                        <input type="checkbox" className="check" id="concluido" />
                    </div>
                    <div className="divCheckBox">
                        <label htmlFor="concluidoSatisfeito"> Concluídos Satisfeitos </label>
                        <br />
                        <input type="checkbox" className="check" id="concluidoSatisfeito" />
                    </div>
                    <div className="divCheckBox">
                        <label htmlFor="concluidoInsatisfeito"> Concluídos Insatisfeitos </label>
                        <br />
                        <input type="checkbox" className="check" id="concluidoInsatisfeito" />
                    </div>
                    <div className="divCheckBox">
                        <label htmlFor="pendenteDev"> Pendente pelo Desenvolvimento </label>
                        <br />
                        <input type="checkbox" className="check" id="pendenteDev" />
                    </div>
                    <div className="divCheckBox">
                        <label htmlFor="pendenteSuporte"> Pendente pelo Suporte </label>
                        <br />
                        <input type="checkbox" className="check" id="pendenteSuporte" />
                    </div>
                    <div className="divCheckBox">
                        <label htmlFor="analise"> Em Análise </label>
                        <br />
                        <input type="checkbox" className="check" id="analise" />
                    </div>
                    <div className="divCheckBox">
                        <label htmlFor="cancelados"> Cancelados </label>
                        <br />
                        <input type="checkbox" className="check" id="Cancelados" />
                    </div>
                    <div className="divSelect">
                        <label htmlFor="filtro"> Filtrar por status: </label>
                        <select id="filtro" className="filtro">
                            <option value="data">Data de Atendimento</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="divText">
                        <input type="date" className="dataInicio" />
                        <input type="date" className="dataFim" />
                    </div>
                    <div className="divSelect">
                        <label htmlFor="filtro"> Pesquisar por: </label>
                        <select id="filtro" className="filtro">
                            <option value="codigo">Código</option>
                            <option value="data">Data</option>
                            <option value="cliente">Cliente</option>
                            <option value="status">Status</option>
                            <option value="statusCliente">Status Cliente</option>
                            <option value="assunto">Assunto</option>
                            <option value="sistema">Sistema</option>
                            <option value="criou">Criou</option>
                            <option value="respondeu">Respondeu</option>
                            <option value="conclusao">Conclusão</option>
                            <option value="tempo">Tempo</option>
                        </select>
                    </div>
                    <div className="divText">
                        <br />
                        <input type="text" className="pesquisa" style={{ width: '20em' }} />
                    </div>
                </div>
            </div>
            <br />
            <div className="div">
                <table>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Data</th>
                            <th>Cliente</th>
                            <th>Status</th>
                            <th>Status Cliente</th>
                            <th>Assunto</th>
                            <th>Sistema</th>
                            <th>Criou</th>
                            <th>Respondeu</th>
                            <th>Conclusão</th>
                            <th>Tempo</th>
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
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}