import React from "react";
import { NavItem, 
} from '../../../../components'

import './style.css';

// used for sidedrawer and toolbar
const NavItems = (props) => {
    return (
        <ul className='NavItems'>

            <NavItem link='/test'>
                Home
            </NavItem>

            <NavItem link='/test'>
                Login
            </NavItem>

            <NavItem link='/test'>
                Test
            </NavItem>
            
        </ul>
    );
}

export default NavItems;