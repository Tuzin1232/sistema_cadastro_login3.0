import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import './home.css';

export default function Suporte() {

    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '1.5em',
    };

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
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField style={{ float: 'right' }} type="number" id="registrosTotal" label="Registros Totais:" variant="standard" />

                    <Button id="novoAtendimento" variant="contained" style={{ float: 'left' }}> Novo atendimento </Button>

                    <FormGroup style={flexContainer}>
                        <FormControlLabel control={<Checkbox id="internos" />} label="Mostrar Internos" />
                        <FormControlLabel control={<Checkbox id="concluido" />} label="Mostrar Concluidos" />
                        <FormControlLabel control={<Checkbox id="concluidoSatisfeito" />} label="Concluídos Satisfeitos" />
                        <FormControlLabel control={<Checkbox id="concluidoInsatisfeito" />} label="Concluídos Insatisfeitos" />
                        <FormControlLabel control={<Checkbox id="pendenteDev" />} label="Pendente Pelo Desenvolvimento" />
                        <FormControlLabel control={<Checkbox id="pendenteSuporte" />} label="Pendente Pelo Suporte" />
                        <FormControlLabel control={<Checkbox id="analise" />} label="Em Análise" />
                        <FormControlLabel control={<Checkbox id="cancelados" />} label="Cancelados" />
                    </FormGroup>
                    <br />

                    <FormGroup style={flexContainer}>

                        <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
                            <InputLabel >Filtrar por status:</InputLabel>
                            <Select
                                id="filtro"
                                label="Filtrar por status:">
                                <MenuItem value="">
                                    <em>Selecionar</em>
                                </MenuItem>
                                <MenuItem value="data">Data de Atendimento</MenuItem>
                                <MenuItem value="2">2</MenuItem>
                                <MenuItem value="3">3</MenuItem>
                            </Select>
                        </FormControl>

                        <FormGroup style={flexContainer}>
                            <TextField
                                id="dataInicio"
                                type="date"
                                variant="standard"
                                InputLabelProps={{ shrink: true }} />

                            <p>a</p>

                            <TextField
                                id="dataFim"
                                type="date"
                                variant="standard"
                                InputLabelProps={{ shrink: true }} />

                        </FormGroup>

                        <FormControl variant="standard" sx={{ m: 1, minWidth: 130 }}>
                            <InputLabel>Pesquisar por:</InputLabel>
                            <Select
                                id="pesquisaPor"
                                label="Pesquisar por:">
                                <MenuItem value="">
                                    <em>Selecionar</em>
                                </MenuItem>
                                <MenuItem value="codigo">Código</MenuItem>
                                <MenuItem value="data">Data</MenuItem>
                                <MenuItem value="cliente">Cliente</MenuItem>
                                <MenuItem value="status">Status</MenuItem>
                                <MenuItem value="statusCliente">Status Cliente</MenuItem>
                                <MenuItem value="assunto">Assunto</MenuItem>
                                <MenuItem value="sistema">Sistema</MenuItem>
                                <MenuItem value="criou">Criou</MenuItem>
                                <MenuItem value="respondeu">Respondeu</MenuItem>
                                <MenuItem value="conclusao">Conclusão</MenuItem>
                                <MenuItem value="tempo">Tempo</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            id="pesquisa"
                            variant="standard"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <img src="https://img.icons8.com/material-outlined/30/000000/search--v1.png" style={{ float: 'right' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </FormGroup>
                </Box>
            </div>
            <br />

            <div className="div">
                <table className="table">
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