import React from 'react';
import { Redirect } from 'react-router';
import cookie from 'react-cookie';


export default function Logoff() {


    cookie.remove('access_token', { path: '/' });
    cookie.remove('nomeUsuario', { path: '/' });



    return <Redirect push to="/login" />;

}

