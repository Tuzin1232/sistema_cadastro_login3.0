import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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
                <Link to="/" className="btn btn-light" id="voltarButton">
                    <img alt="botao voltar" src="https://img.icons8.com/material-outlined/24/000000/back--v1.png" />
                </Link>
                <div className="div" id="infoContrato">
                    <h2>Informações do Contrato</h2>
                    <br />
                    <div className="conteudo">

                        <TextField
                            id="codigo"
                            label="Código:"
                            variant="standard"
                            value={id} />

                        <FormGroup>
                            <FormControlLabel control={
                                <Switch
                                    id="avaliacao"
                                    defaultChecked={true}
                                    value={avaliacao}
                                    onChange={(e) => setAvaliacao(e.target.checked ? "Sim" : "Não")} />}
                                label="Pode Avaliar" />
                        </FormGroup>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel >Tipo:</InputLabel>
                            <Select
                                id="tipo"
                                value={tipo}
                                label="Tipo:"
                                onChange={(e) => setTipo(e.target.value)}>
                                <MenuItem value="">
                                    <em>Selecionar</em>
                                </MenuItem>
                                <MenuItem value="1">2</MenuItem>
                                <MenuItem value="2">2</MenuItem>
                                <MenuItem value="3">3</MenuItem>
                            </Select>
                        </FormControl>
                        <FormGroup>
                            <FormControlLabel control={
                                <Switch
                                    id="pend_financeira"
                                    defaultChecked={true}
                                    value={pendFinanceira}
                                    onChange={(e) => setPendFinanceira(e.target.checked ? "Sim" : "Não")} />}
                                label="Pendência Financeira" />
                        </FormGroup>

                        <TextField
                            id="mesAtraso"
                            label="Meses em Atraso:"
                            variant="standard"
                            value={mesAtraso}
                            onChange={(e) => setMesAtraso(e.target.value)} />

                        <FormGroup>
                            <FormControlLabel control={
                                <Switch
                                    id="contratoAtivo"
                                    defaultChecked={true}
                                    value={contratoAtivo}
                                    onChange={(e) => setContratoAtivo(e.target.checked ? "Sim" : "Não")} />}
                                label="Contrato Ativo" />
                        </FormGroup>
                    </div>
                </div>
                <br />
                <div className="div" id="infoCliente">
                    <h2>Informações do Cliente</h2>
                    <br />
                    <div className="conteudo">
                        <TextField
                            id="nome"
                            label="Nome:"
                            variant="standard"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)} />

                        <TextField
                            id="cpf"
                            type="number"
                            label="CPF:"
                            variant="standard"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)} />

                        <TextField
                            id="cnpj"
                            type="number"
                            label="CNPJ:"
                            variant="standard"
                            value={cnpj}
                            onChange={(e) => setCnpj(e.target.value)} />

                        <TextField
                            id="tel"
                            type="number"
                            label="Telefone:"
                            variant="standard"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)} />

                        <TextField
                            id="cel"
                            type="number"
                            label="Celular:"
                            variant="standard"
                            value={celular}
                            onChange={(e) => setCelular(e.target.value)} />

                        <TextField
                            id="contato"
                            type="email"
                            label="Contato:"
                            variant="standard"
                            value={contato}
                            onChange={(e) => setContato(e.target.value)} />

                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel>Ramo de Atividade:</InputLabel>
                            <Select
                                id="ramo"
                                value={ramoAtividade}
                                label="Tipo:"
                                onChange={(e) => setRamoAtividade(e.target.value)}>
                                <MenuItem value="">
                                    <em>Selecionar</em>
                                </MenuItem>
                                <MenuItem value="1">2</MenuItem>
                                <MenuItem value="2">2</MenuItem>
                                <MenuItem value="3">3</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            id="cidade"
                            label="Cidade:"
                            variant="standard"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)} />

                        <TextField
                            id="rua"
                            label="Rua:"
                            variant="standard"
                            value={rua}
                            onChange={(e) => setRua(e.target.value)} />

                        <TextField
                            id="bairro"
                            label="Bairro:"
                            variant="standard"
                            value={bairro}
                            onChange={(e) => setBairro(e.target.value)} />

                        <TextField
                            id="numero"
                            type="number"
                            label="Número:"
                            variant="standard"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)} />

                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel>UF:</InputLabel>
                            <Select
                                id="UF"
                                value={UF}
                                label="Tipo:"
                                onChange={(e) => setUF(e.target.value)}>
                                <MenuItem value="">
                                    <em>Selecionar</em>
                                </MenuItem>
                                <MenuItem value="AC">AC</MenuItem>
                                <MenuItem value="AL">AL</MenuItem>
                                <MenuItem value="AP">AP</MenuItem>
                                <MenuItem value="AM">AM</MenuItem>
                                <MenuItem value="BA">BA</MenuItem>
                                <MenuItem value="CE">CE</MenuItem>
                                <MenuItem value="ES">ES</MenuItem>
                                <MenuItem value="GO">GO</MenuItem>
                                <MenuItem value="MA">MA</MenuItem>
                                <MenuItem value="MT">MT</MenuItem>
                                <MenuItem value="MS">MS</MenuItem>
                                <MenuItem value="MG">MG</MenuItem>
                                <MenuItem value="PA">PA</MenuItem>
                                <MenuItem value="PB">PB</MenuItem>
                                <MenuItem value="PR">PR</MenuItem>
                                <MenuItem value="PE">PE</MenuItem>
                                <MenuItem value="PI">PI</MenuItem>
                                <MenuItem value="RJ">RJ</MenuItem>
                                <MenuItem value="RN">RN</MenuItem>
                                <MenuItem value="RS">RS</MenuItem>
                                <MenuItem value="RO">RO</MenuItem>
                                <MenuItem value="RR">RR</MenuItem>
                                <MenuItem value="SC">SC</MenuItem>
                                <MenuItem value="SP">SP</MenuItem>
                                <MenuItem value="SE">SE</MenuItem>
                                <MenuItem value="TO">TO</MenuItem>
                                <MenuItem value="DF">DF</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            id="cep"
                            type="number"
                            label="CEP:"
                            variant="standard"
                            value={cep}
                            onChange={(e) => setCep(e.target.value)} />

                        <TextField
                            id="complemento"
                            label="Complemento:"
                            variant="standard"
                            value={complemento}
                            onChange={(e) => setComplemento(e.target.value)} />

                        <TextField
                            id="ip_acesso"
                            label="Ip de Acesso:"
                            variant="standard"
                            value={ipAcesso}
                            onChange={(e) => setIpAcesso(e.target.value)} />

                        <TextField
                            id="obv"
                            label="Observação:"
                            variant="standard"
                            value={obv}
                            onChange={(e) => setObv(e.target.value)} />
                    </div>
                </div>
                <br />
                <div className="div" id="infoSistema">
                    <h2>Informações do Sistema</h2>
                    <br />
                    <div className="conteudo">

                        <FormGroup>
                            <FormControlLabel control={
                                <Switch
                                    id="ativo"
                                    defaultChecked={true}
                                    value={ativo}
                                    onChange={(e) => setAtivo(e.target.checked ? "Sim" : "Não")} />}
                                label="Ativo" />
                        </FormGroup>

                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel >Sistema:</InputLabel>
                            <Select
                                id="sistema"
                                value={sistema}
                                label="Sistema:"
                                onChange={(e) => setSistema(e.target.value)}>
                                <MenuItem value="">
                                    <em>Selecionar</em>
                                </MenuItem>
                                <MenuItem value={"Assistência Social"}>Assistência Social</MenuItem>
                                <MenuItem value={"CRM"}>CRM</MenuItem>
                                <MenuItem value={"Educação"}>Educação</MenuItem>
                                <MenuItem value={"Portal Cidadão"}>Portal Cidadão</MenuItem>
                                <MenuItem value={"S-Commerce"}>S-Commerce</MenuItem>
                                <MenuItem value={"SADM"}>SADM</MenuItem>
                                <MenuItem value={"SAS"}>SAS</MenuItem>
                                <MenuItem value={"Saúde"}>Saúde</MenuItem>
                                <MenuItem value={"SCA"}>SCA</MenuItem>
                                <MenuItem value={"SCA/SAS"}>SCA/SAS</MenuItem>
                                <MenuItem value={"SE"}>SE</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            id="valor"
                            type="number"
                            label="Valor:"
                            variant="standard"
                            value={valor}
                            onChange={(e) => setValor(e.target.value)} />

                        <TextField
                            id="dataInicio"
                            type="date"
                            label="Data de Início:"
                            variant="standard"
                            InputLabelProps={{ shrink: true }}
                            value={dataInicio}
                            onChange={(e) => setDataInicio(e.target.value)} />

                        <TextField
                            id="dataFim"
                            type="date"
                            label="Data de Término:"
                            variant="standard"
                            InputLabelProps={{ shrink: true }}
                            value={dataFim}
                            onChange={(e) => setDataFim(e.target.value)} />
                    </div>
                    <br />
                    <Button id="salvar" variant="contained" color="success" onClick={cadastrarCliente}> Salvar </Button>
                </div>
            </form>
        </div>
    );
}
