import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";

export default function Cliente(props) {
    return (
        <div className="cliente">
            <Link to="/" className="btn btn-light" id="voltarButton">
                <img src="https://img.icons8.com/material-outlined/24/000000/back--v1.png" />
            </Link>
            <h1>Informações do Cliente</h1>
            <table style={{ width: '100%' }}>
                <tr>
                    <td>ID:</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>CNPJ</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>CPF</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Telefone</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Celular</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Contato</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Ramo de Atividade</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Cidade</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Rua</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Bairro</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Numero</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>UF</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>CEP</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Complemento</td>
                    <td>1</td>
                </tr>
            </table>
            <button type="button" className="btn btn-warning" name="alterar" id="alterar"> Alterar Informações </button>
            <button type="button" style={{ marginLeft: '1em' }} className="btn btn-danger" name="excluir" id="excluir"> Excluir Informações </button>

            <h1 style={{ marginTop: '3rem' }}>Informações do Sistema</h1>
            <table style={{ width: '100%' }}>
                <tr>
                    <td>Contrato Ativo</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Sistema</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Valor</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Data de inicio</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>Data de término</td>
                    <td>1</td>
                </tr>
            </table>
            <button type="button" className="btn btn-warning" name="alterar" id="alterar"> Alterar Informações </button>
            <button type="button" style={{ marginLeft: '1em' }} className="btn btn-danger" name="excluir" id="excluir"> Excluir Informações </button>
        </div>

    )
}