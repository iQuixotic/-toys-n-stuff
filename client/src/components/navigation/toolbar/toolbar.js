import React from "react";
import { 
         Logo, 
         NavItems, 
         Burger
 } from '../../../components'


import './style.css';

const Nav = (props) => {
    return (
        <header className='Navbar'>
            <Burger id='nav-top-burger' size='3x'/>
            <Logo id='nav-top-train'/>

            <nav>
                <NavItems top='true'/>
            </nav>
        </header>
    );
}

export default Nav;