import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import columns from './InfoSuporte'
import './home.css';

export default function RespostaSuporte() {
    const [id] = useState(0);
    const [cookies] = useCookies(['access_token']);

    const [data] = useState("");
    const [cliente] = useState("");
    const [usuario] = useState("");
    const [tipo] = useState("");
    const [sistema] = useState("");
    const [assunto] = useState("");
    const [responsavel, setResponsavel] = useState("");
    const [status, setStatus] = useState("");
    const [feedback, setFeedback] = useState("");

    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '1.5em',
    };

    function feedback() {
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
            <Link to="/" className="btn btn-light" id="voltarButton">
                <img alt="botao voltar" src="https://img.icons8.com/material-outlined/24/000000/back--v1.png" />
            </Link>
            <div className="div">
                <Button variant="contained" id="salvar" color="success" style={{ float: 'right' }}>
                    Salvar
                </Button>

                <FormGroup style={flexContainer}>

                    <TextField
                        id="data"
                        type="date"
                        label="Data:"
                        variant="standard"
                        value={data}
                        InputLabelProps={{ shrink: true }} />

                    <FormControl variant="standard" sx={{ minWidth: 130 }}>
                        <InputLabel>Cliente:</InputLabel>
                        <Select
                            id="cliente"
                            label="Cliente:"
                            value={cliente}>
                            <MenuItem value="">
                                <em>Selecionar</em>
                            </MenuItem>
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                            <MenuItem value="5">5</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        id="usuario"
                        label="Usuário:"
                        variant="standard"
                        value={usuario} />

                    <FormControl variant="standard" sx={{ minWidth: 130 }}>
                        <InputLabel>Tipo:</InputLabel>
                        <Select
                            id="tipo"
                            label="Tipo:"
                            value={tipo}>
                            <MenuItem value="">
                                <em>Selecionar</em>
                            </MenuItem>
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                            <MenuItem value="4">4</MenuItem>
                            <MenuItem value="5">5</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl variant="standard" sx={{ minWidth: 120 }}>
                        <InputLabel >Sistema:</InputLabel>
                        <Select
                            id="sistema"
                            value={sistema}
                            label="Sistema:">
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
                        id="assunto"
                        label="Assunto:"
                        variant="standard"
                        value={assunto} />

                    <FormControl variant="standard" sx={{ minWidth: 130 }}>
                        <InputLabel>Status:</InputLabel>
                        <Select
                            id="status"
                            label="Status:"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)} >
                            <MenuItem value="">
                                <em>Selecionar</em>
                            </MenuItem>
                            <MenuItem value={"Pendente pelo Desenvolvimento"}>Pendente Pelo Desenvolvimento</MenuItem>
                            <MenuItem value={"Concluido"}>Concluído</MenuItem>
                            <MenuItem value={"Pendente pelo Suporte"}>Pendente pelo Suporte</MenuItem>
                            <MenuItem value={"Em Análise"}>Em Análise</MenuItem>
                            <MenuItem value={"Cancelada"}>Cancelada</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField
                        id="responsavel"
                        label="Responsável:"
                        variant="standard"
                        value={responsavel}
                        onChange={(e) => setResponsavel(e.target.value)} />
    
                </FormGroup>
            </div >

            <br />
            <div className="div">
                <FormGroup style={flexContainer}>
                    <TextField
                        id="feedback"
                        label="Feedback para o Cliente:"
                        variant="outlined"
                        value={feedback}
                        multiline
                        fullWidth
                        onChange={(e) => setFeedback(e.target.value)} />

                </FormGroup>
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
                    </tbody>
                </table>
                <div className="conteudo">

                    <TextField
                        id="arquivo"
                        variant="outlined"
                        type="file" />

                </div>
            </div>
        </div >
    )
}