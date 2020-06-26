import React from "react";
import { NavLink } from "react-router-dom";
import './style.scss';

function Header() {
    return (
        <nav id="header-block">
            <NavLink id="home-button" exact activeClassName="active" to="/">
                Home
            </NavLink>
        </nav>
    );
}
export default Header;
