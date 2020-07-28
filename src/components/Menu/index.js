import React from 'react';
import Logo from '../../assets/img/LogoMain.png'
// import { Container } from './styles';
import "./Menu.css"
import Button from '../components';
// import ButtonLink from '../ButtonLink';

function Menu() {
    return (

        <nav className="Menu">
            <a href="/">
                <img className="Logo" alt="AluraFlixLogo" src={Logo} />
            </a>
            <Button as="a" className="ButtonLink" href="/">
                Novo video
            </Button>
        </nav>

    );
}

export default Menu;