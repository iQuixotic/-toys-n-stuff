import React from "react";
import { 
        NavItems, 
        Logo,
} from '../../../../components'

import './style.css';

const Sidedrawer = (props) => {
    return (
        <div className='Sidedrawer'>
        <Logo />

        <nav>
            <NavItems top='true' />
        </nav>
    </div>
    );
}

export default Sidedrawer;