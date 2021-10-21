import React from 'react';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import './home.css';


export default function Suporte() {

    return (
        <>
            <Link to="/" className="btn btn-light" id="voltarButton">
                <img alt="botao voltar" src="https://img.icons8.com/material-outlined/24/000000/back--v1.png" />
            </Link>
            <div className="div">
                <h1>Suporte ao Cliente</h1>

            </div>
        </>
    )

}