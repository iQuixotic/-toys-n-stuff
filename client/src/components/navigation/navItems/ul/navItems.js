import React from "react";
import { NavItem, 
} from '../../../../components'

import './style.css';

// used for sidedrawer and toolbar
const NavItems = (props) => {
    return (
        <ul className='NavItems'>
            { props.top ?
                <div className='center'>
                    <NavItem link='/test'>
                        Dashboard
                    </NavItem>

                    <NavItem link='/'>
                        Search
                    </NavItem>

                    <NavItem link='/contact' active>
                        Browse
                    </NavItem>

                    <NavItem link='/contact'>
                        Cart
                    </NavItem>
                </div> :
                null
            }

        </ul>
    );
}

export default NavItems;