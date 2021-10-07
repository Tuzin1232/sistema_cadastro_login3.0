import React, { useState } from 'react';
import columns from './RepositorioSistemas';
import { useCookies } from 'react-cookie';
import './home.css';


export function Home() {
    const [valor, setValor] = useState("");
    const [sistemas, setSistemas] = useState([])

    const [cookies, setCookie] = useCookies(['access_token']);

    const [id, setId] = useState(0);
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
    const [codigoCliente, setCodigoCliente] = useState("");


    const tabelaValor = { valor }

    const onSubmit = function (data) {
        data["sistemas"] = sistemas
        fetch('http://localhost:3000/api/cadastro', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

    const handleChange = e => setValor(e.target.onSubmit);

    console.log(sistemas)

    function getValores() {
        let infoSistema = {
            id: sistemas.length + 1,
            ativo: document.getElementById("ativo").checked ? "Sim" : "Não",
            sistema: tabelaValor.value,
            data_inicio: document.getElementById("data_inicio").value,
            data_fim: document.getElementById("data_fim").value,
            valor: document.getElementById("valor").value
        }
        setSistemas([...sistemas, infoSistema])

    }
    function salvarCliente() {
        const requestOptions = {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + cookies.access_token,
            },
            body: JSON.stringify({
                id: id,
                avaliacao: true,
                tipo: tipo,
                pend_financeira: true,
                mes_atraso: Number(mesAtraso),
                contrato_ativo: true,
                nome: nome,
                cpnj: cnpj,
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
                ativo: true,
                codigo_cliente: Number(codigoCliente)
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
            <form className="form">
                <br />
                <div className="div" id="infoContrato">
                    <h2>Informações do contrato</h2>
                    <div className="divText">
                        <label htmlFor="codigo">Código</label>
                        <br />
                        <input type="text" className="codigo" id="codigo" />
                    </div>
                    <div className="divCheckBox">
                        <label htmlFor="podeAvaliar">Pode Avaliar</label>
                        <input type="checkbox" id="avaliacao" defaultChecked={false} />
                    </div>
                    <div className="divSelect">
                        <label htmlFor="tipo">Tipo</label>
                        <select style={{ marginLeft: '1em' }} id="tipo" className="tipo">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="divCheckBox">
                        <label htmlFor="pendFinanceira">Pendência Financeira</label>
                        <input type="checkbox" id="pend_financeira" defaultChecked={false} />
                    </div>
                    <div className="divText">
                        <label htmlFor="mesAtraso">Meses em atraso</label>
                        <input type="text" className="mesAtraso" id="mesAtraso" />
                    </div>
                    <div className="divCheckBox">
                        <label htmlFor="contratoAtivo">Contrato Ativo</label>
                        <input type="checkbox" id="contratoAtivo" defaultChecked={false} />
                    </div>
                </div>
                <br />
                <div className="div" id="infoCliente">
                    <h2>Informações do Cliente</h2>
                    <div className="divText">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" className="nome" id="nome" />
                    </div>
                    <div className="divNumber">
                        <label htmlFor="cnpj">CNPJ</label>
                        <input type="number" className="cnpj" id="cnpj" />
                    </div>
                    <div className="divNumber">
                        <label htmlFor="cpf">CPF</label>
                        <input type="number" className="cpf" id="cpf" />
                    </div>
                    <div className="divNumber">
                        <label htmlFor="tel">Telefone</label>
                        <input type="number" className="tel" id="tel" />
                    </div>
                    <div className="divNumber">
                        <label htmlFor="cel">Celular</label>
                        <input type="number" className="cel" id="cel" />
                    </div>
                    <div className="divText">
                        <label htmlFor="contato">Contato</label>
                        <input type="email" className="contato" id="contato" />
                    </div>
                    <div className="divSelect">
                        <label htmlFor="ramo">Ramo de Atividade</label>
                        <select style={{ marginLeft: '1em' }} id="ramo" className="ramo">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="divText">
                        <label htmlFor="cidade">Cidade</label>
                        <input type="text" className="cidade" id="cidade" />
                    </div>
                    <div className="divText">
                        <label htmlFor="rua">Rua</label>
                        <input type="text" className="rua" id="rua" />
                    </div>
                    <div className="divText">
                        <label htmlFor="bairro">Bairro</label>
                        <input type="text" className="bairro" id="bairro" />
                    </div>
                    <div className="divNumber">
                        <label htmlFor="numero">Número</label>
                        <input type="number" className="numero" id="numero" />
                    </div>
                    <div className="divSelect">
                        <label htmlFor="uf">UF</label>
                        <select style={{ marginLeft: '1em' }} id="uf" className="uf" >
                            <option>AC</option>
                            <option>AL</option>
                            <option>AP</option>
                            <option>AM</option>
                            <option>BA</option>
                            <option>CE</option>
                            <option>ES</option>
                            <option>GO</option>
                            <option>MA</option>
                            <option>MT</option>
                            <option>MS</option>
                            <option>MG</option>
                            <option>PA</option>
                            <option>PB</option>
                            <option>PR</option>
                            <option>PE</option>
                            <option>PI</option>
                            <option>RJ</option>
                            <option>RN</option>
                            <option>RS</option>
                            <option>RO</option>
                            <option>RR</option>
                            <option>SC</option>
                            <option>SP</option>
                            <option>SE</option>
                            <option>TO</option>
                            <option>DF</option>
                        </select>
                    </div>
                    <div className="divNumber">
                        <label htmlFor="cep">CEP</label>
                        <input type="number" className="cep" id="cep" />
                    </div>
                    <div className="divText">
                        <label htmlFor="complemento">Complemento</label>
                        <input type="text" className="complemento" id="complemento" />
                    </div>
                </div>
                <br />
                <div className="div" id="infoSistema">
                    <div className="divCheckBox">
                        <label htmlFor="ativo">Ativo</label>
                        <input type="checkbox" id="ativo" defaultChecked={false} />
                    </div>
                    <div className="divSelect">
                        <label htmlFor="sistema">Sistema</label>
                        <select style={{ marginLeft: '1em' }} id="sistema" className="sistema" >
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
                        <input type="number" className="valor" id="valor" />
                    </div>
                    <div className="divText">
                        <label htmlFor="dataInicio">Data de Inicio</label>
                        <input type="text" className="dataInicio" id="dataInicio" />
                    </div>
                    <div className="divText">
                        <label htmlFor="dataFim">Data de Término</label>
                        <input type="text" className="dataFim" id="dataFim" />
                    </div>
                    <br />
                    <div className="infoSistemasAdd">
                        <button type="button" id="add" className="btn btn-primary" onClick={getValores} >Adicionar</button>
                        <button type="button" id="remover" className="btn btn-warning" style={{ marginLeft: '1em' }}>Remover selecionados</button>
                        <br />
                        <br />
                        <button type="submit" id="salvar" className="btn btn-success" onClick={salvarCliente}>Salvar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Home;