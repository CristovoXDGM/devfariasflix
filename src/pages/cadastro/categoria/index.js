import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function CadastroCategoria() {
    return (
        <PageDefault>
            <h1> Cadstro de Categoria</h1>
            <Link to="/cadastro/video" >
                Cadastrar Video
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;