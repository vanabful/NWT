import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../images/logo3.png';
import logo_white from '../images/logo3-white.png';

const Header = (props) => {

    const { links } = props;

    return(
        <header className="header">
            <div className="header__logo">
                <div className="header__logo__logo-image">
                    <img src={links ? logo : logo_white} alt="logo"/>
                </div>
                <Link to="/" className="header__logo__name" style={links ? links : null}><h2> Logo </h2></Link>
            </div>
            <ul className="header__nav">
                <NavLink exact to="/" className="header__nav__link" style={links ? links : null}><li>Home</li></NavLink>
                <NavLink to='/animals' className="header__nav__link" style={links ? links : null}><li>Animals</li></NavLink>
            </ul>
        </header>
    );
}

export default Header;