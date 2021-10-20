import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import './home.css';

export default function CadastroCliente() {
    const [id] = useState(0);
    const [cookies] = useCookies(['access_token']);

    const [sistema, setSistema] = useState("");
    const [avaliacao, setAvaliacao] = useState("");
    const [tipo, setTipo] = useState("");
    const [pendFinanceira, setPendFinanceira] = useState("");
    const [mesAtraso, setMesAtraso] = useState("");
    const [contratoAtivo, setContratoAtivo] = useState("");
    const [nome, setNome] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [celular, setCelular] = useState("");
    const [contato, setContato] = useState("");
    const [ramoAtividade, setRamoAtividade] = useState("");
    const [cidade, setCidade] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [numero, setNumero] = useState("");
    const [UF, setUF] = useState("");
    const [cep, setCep] = useState("");
    const [complemento, setComplemento] = useState("");
    const [ipAcesso, setIpAcesso] = useState("");
    const [obv, setObv] = useState("");
    const [ativo, setAtivo] = useState("");
    const [valor, setValor] = useState("");
    const [dataInicio, setDataInicio] = useState("");
    const [dataFim, setDataFim] = useState("");

    function cadastrarCliente() {
        const requestOptions = {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookies.access_token,
            },
            body: JSON.stringify({
                id: id,
                avaliacao: Boolean(avaliacao),
                tipo: tipo,
                pend_financeira: Boolean(pendFinanceira),
                mes_atraso: Number(mesAtraso),
                contrato_ativo: Boolean(contratoAtivo),
                nome: nome,
                cnpj: cnpj,
                cpf: cpf,
                telefone: telefone,
                celular: celular,
                contato: contato,
                ramo_atividade: ramoAtividade,
                cidade: cidade,
                rua: rua,
                bairro: bairro,
                numero: Number(numero),
                UF: UF,
                cep: Number(cep),
                complemento: complemento,
                ip_acesso: ipAcesso,
                obv: obv,
                ativo: Boolean(ativo),

            })
        };

        fetch('api/cliente/cadastrar', requestOptions).then((response) => {

            if (response.ok) {
                response.text().then(r => alert(r));
            } else {
                response.text().then(r => alert(r));
            }

        });
    }

    return (
        <div className="App">
            <form className="form" >
                <br />
                <div className="div" id="infoContrato">
                    <div className="back">
                        <Link to="/" className="btn btn-light" id="voltarButton">
                            <img alt="botao voltar" src="https://img.icons8.com/material-outlined/24/000000/back--v1.png" />
                        </Link>
                    </div>
                    <br />
                    <h2>Informações do Contrato</h2>
                    <div className="divText">
                        <label htmlFor="codigo">Código</label>
                        <br />
                        <input type="text" className="codigo" id="codigo" value={id} />
                    </div>
                    <div className="divCheckBox">
                        <label htmlFor="podeAvaliar">Pode Avaliar</label>
                        <input type="checkbox" id="avaliacao" defaultChecked={false} value={avaliacao} onChange={(e) => setAvaliacao(e.target.checked ? "Sim" : "Não")} />
                    </div>
                    <div className="divSelect">
                        <label htmlFor="tipo">Tipo</label>
                        <select style={{ marginLeft: '1em' }} id="tipo" className="tipo" value={tipo} onChange={(e) => setTipo(e.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="divCheckBox">
                        <label htmlFor="pendFinanceira">Pendência Financeira</label>
                        <input type="checkbox" id="pend_financeira" defaultChecked={false} value={pendFinanceira} onChange={(e) => setPendFinanceira(e.target.checked ? "Sim" : "Não")} />
                    </div>
                    <div className="divText">
                        <label htmlFor="mesAtraso">Meses em atraso</label>
                        <input type="text" className="mesAtraso" id="mesAtraso" value={mesAtraso} onChange={(e) => setMesAtraso(e.target.value)} />
                    </div>
                    <div className="divCheckBox">
                        <label htmlFor="contratoAtivo">Contrato Ativo</label>
                        <input type="checkbox" id="contratoAtivo" defaultChecked={false} value={contratoAtivo} onChange={(e) => setContratoAtivo(e.target.checked ? "Sim" : "Não")} />
                    </div>
                </div>
                <br />
                <div className="div" id="infoCliente">
                    <h2>Informações do Cliente</h2>
                    <div className="divText">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" className="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className="divNumber">
                        <label htmlFor="cnpj">CNPJ</label>
                        <input type="number" className="cnpj" id="cnpj" value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                    </div>
                    <div className="divNumber">
                        <label htmlFor="cpf">CPF</label>
                        <input type="number" className="cpf" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                    </div>
                    <div className="divNumber">
                        <label htmlFor="tel">Telefone</label>
                        <input type="number" className="tel" id="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    </div>
                    <div className="divNumber">
                        <label htmlFor="cel">Celular</label>
                        <input type="number" className="cel" id="cel" value={celular} onChange={(e) => setCelular(e.target.value)} />
                    </div>
                    <div className="divText">
                        <label htmlFor="contato">Contato</label>
                        <input type="email" className="contato" id="contato" value={contato} onChange={(e) => setContato(e.target.value)} />
                    </div>
                    <div className="divSelect">
                        <label htmlFor="ramo">Ramo de Atividade</label>
                        <select style={{ marginLeft: '1em' }} id="ramo" className="ramo" value={ramoAtividade} onChange={(e) => setRamoAtividade(e.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="divText">
                        <label htmlFor="cidade">Cidade</label>
                        <input type="text" className="cidade" id="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                    </div>
                    <div className="divText">
                        <label htmlFor="rua">Rua</label>
                        <input type="text" className="rua" id="rua" value={rua} onChange={(e) => setRua(e.target.value)} />
                    </div>
                    <div className="divText">
                        <label htmlFor="bairro">Bairro</label>
                        <input type="text" className="bairro" id="bairro" value={bairro} onChange={(e) => setBairro(e.target.value)} />
                    </div>
                    <div className="divNumber">
                        <label htmlFor="numero">Número</label>
                        <input type="number" className="numero" id="numero" value={numero} onChange={(e) => setNumero(e.target.value)} />
                    </div>
                    <div className="divSelect">
                        <label htmlFor="uf">UF</label>
                        <select style={{ marginLeft: '1em' }} id="uf" className="uf" value={UF} onChange={(e) => setUF(e.target.value)}>
                            <option value="AC">AC</option>
                            <option value="AL">AL</option>
                            <option value="AP">AP</option>
                            <option value="AM">AM</option>
                            <option value="BA">BA</option>
                            <option value="CE">CE</option>
                            <option value="ES">ES</option>
                            <option value="GO">GO</option>
                            <option value="MA">MA</option>
                            <option value="MT">MT</option>
                            <option value="MS">MS</option>
                            <option value="MG">MG</option>
                            <option value="PA">PA</option>
                            <option value="PB">PB</option>
                            <option value="PR">PR</option>
                            <option value="PE">PE</option>
                            <option value="PI">PI</option>
                            <option value="RJ">RJ</option>
                            <option value="RN">RN</option>
                            <option value="RS">RS</option>
                            <option value="RO">RO</option>
                            <option value="RR">RR</option>
                            <option value="SC">SC</option>
                            <option value="SP">SP</option>
                            <option value="SE">SE</option>
                            <option value="TO">TO</option>
                            <option value="DF">DF</option>
                        </select>
                    </div>
                    <div className="divNumber">
                        <label htmlFor="cep">CEP</label>
                        <input type="number" className="cep" id="cep" value={cep} onChange={(e) => setCep(e.target.value)} />
                    </div>
                    <div className="divText">
                        <label htmlFor="complemento">Complemento</label>
                        <input type="text" className="complemento" id="complemento" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
                    </div>
                    <div className="divText">
                        <label htmlFor="ip_acesso">Ip de Acesso</label>
                        <input type="text" className="ip_acesso" id="ip_acesso" value={ipAcesso} onChange={(e) => setIpAcesso(e.target.value)} />
                    </div>
                    <div className="divText">
                        <label htmlFor="obv">Observação</label>
                        <input type="text" className="obv" id="obv" value={obv} onChange={(e) => setObv(e.target.value)} />
                    </div>
                </div>
                <br />
                <div className="div" id="infoSistema">
                    <h2>Informações do Sistema</h2>
                    <div className="divCheckBox">
                        <label htmlFor="ativo">Ativo</label>
                        <input type="checkbox" id="ativo" defaultChecked={false} value={ativo} onChange={(e) => setAtivo(e.target.checked ? "Sim" : "Não")} />
                    </div>
                    <div className="divSelect">
                        <label htmlFor="sistema">Sistema</label>
                        <select style={{ marginLeft: '1em' }} id="sistema" className="sistema" value={sistema} onChange={(e) => setSistema(e.target.value)}>
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
                    <div className="divNumber">
                        <label htmlFor="valor">Valor</label>
                        <input type="number" className="valor" id="valor" value={valor} onChange={(e) => setValor(e.target.value)} />
                    </div>
                    <div className="divText">
                        <label htmlFor="dataInicio">Data de Inicio</label>
                        <input type="date" className="dataInicio" id="dataInicio" value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} />
                    </div>
                    <div className="divText">
                        <label htmlFor="dataFim">Data de Término</label>
                        <input type="date" className="dataFim" id="dataFim" value={dataFim} onChange={(e) => setDataFim(e.target.value)} />
                    </div>
                    <br />
                    <button type="button" id="editar" style={{ marginRight: '10px' }} className="btn btn-success" onClick={cadastrarCliente}>Salvar</button>
                </div>
            </form>
        </div>
    );
}
