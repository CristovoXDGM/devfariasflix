import React from 'react'
import styled, { keyframes } from 'styled-components';
import "./ErroPage.css"
import ErroImage from '../../assets/img/errormessage.svg'
import { Link } from 'react-router-dom';

const Errodiv = styled.div`

    min-height:100%;
    position:fixed;
    top:0;
    right:0;
    left: 0;
    bottom:0;
    background-color:#011627;
    flex:1;
    display:flexbox;
    align-items:center;

    justify-content:center;
  
`;
const jumpBrathAnimation = keyframes`
        0%   { font-size:20px;}
        50%   { font-size:26px;}
        100% {   font-size:20px; }
`;
const LinkToHome = styled.a`

    background-color:#F71735;
    color:#fff;
    font-size:25px;
    height:50%;
    text-align:center;
    animation-iteration-count:infinite;
    animation-duration:3s;
    animation-name:${jumpBrathAnimation};
   

`




function ErrorPage() {
    return (

        <Errodiv>
            <img alt="ErroImage" src={ErroImage} style={{ height: 150, color: "#F71735" }} />
            <br></br>
            <LinkToHome as={Link} to="/"  >
                Aperta aqui para volta para o Inicio!!
                </LinkToHome>
        </Errodiv>


    );
}

export default ErrorPage;
