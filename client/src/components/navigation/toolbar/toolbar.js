import React from "react";
import { Logo, 
         NavItems, 
 } from '../../../components'


import './style.css';

const Nav = (props) => {
    return (
        <header className='Navbar'>
            <div>MENU</div>
            <Logo/>

            <nav>
                <NavItems />
            </nav>
        </header>
    );
}

export default Nav;