import React from "react";

import {
    NavItems,
    Burger
} from '../../../components'


import './style.css';

const Nav = (props) => {
    return (
        <header className='Navbar'>
            <Burger id='nav-top-burger' size='3x' />
            <div id='spacer'></div>
            <nav>
                <NavItems top='true' />
            </nav>
        </header>
    );
}

export default Nav;