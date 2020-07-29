import React from 'react';
import Logo from '../../assets/img/LogoMain.png'
// import { Container } from './styles';
import "./Menu.css"
import Button from '../components/Button';
import { Link } from 'react-router-dom';
// import ButtonLink from '../ButtonLink';

function Menu() {
    return (

        <nav className="Menu">
            <Link to="/">
                <img className="Logo" alt="AluraFlixLogo" src={Logo} />
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo video
            </Button>
        </nav>

    );
}

export default Menu;