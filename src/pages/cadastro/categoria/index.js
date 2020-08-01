import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FormField from '../../../components/FormField';
import api from '../../../services/api';

const ButtonSubmitForm = styled.button`
 
 margin-top:20px;
 width:180px;
 height:54px;
 border-width:1;
 background-color:#2A7AE4;
 color:#fff;
 border-color:transparent;
 border-radius:4px;
 font-size:21px;
 transition:0.5s;
 &:hover{
   opacity:0.6;  
 }
    
 `


function CadastroCategoria() {


    const valoresIniciais = {
        nome: "",
        descricao: "",
        cor: "#000"
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    const URL = "categorias/";

    const getUrlData = async () => {


        try {
            const result = await api.get(URL);
            // console.log(result.data);
            setCategorias([
                ...result.data
            ]);
            console.log(`[categorias] ${categorias}`)
        } catch (error) {

        }


    }

    useEffect(() => {
        getUrlData();
    }, []);

    const addCategory = (event) => {
        event.preventDefault();
        setCategorias([
            ...categorias,
            values
        ])
        setValues(valoresIniciais);

    }

    const addValue = (key, value) => {
        setValues({
            ...values,
            [key]: value //[nome]= 'valor'
        })
    }

    const handleChange = (changes) => {
        addValue(
            changes.target.getAttribute('name'),
            changes.target.value
        );
    }



    return (
        <PageDefault>
            <h1 style={{ textAlign: "center" }} >
                Cadastro de Categoria: {values.titulo}
            </h1>

            <form onSubmit={(e) => addCategory(e)} >

                <FormField
                    label="Nome da Categoria"
                    name='nome'
                    value={values.titulo}
                    onChange={handleChange}
                    type="text"
                    isTextArea={false}
                />



                <FormField
                    label="Descricao: "
                    name='descricao'
                    value={values.descricao}
                    onChange={handleChange}
                    type="text"
                    isTextArea={true}
                />
                <FormField
                    label="Cor: "
                    name='cor'
                    value={values.cor}
                    onChange={handleChange}
                    type="color" />

                <ButtonSubmitForm>
                    Salvar
                </ButtonSubmitForm>
            </form>



            <ul>
                {
                    categorias.map((category, index) => {
                        return <li key={`${category.titulo}` + index} >{category.titulo}</li>
                    })
                }
            </ul>


            <Link style={{ margin: 20 }} to="/">
                Ir para home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;