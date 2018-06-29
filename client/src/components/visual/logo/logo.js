import React from "react";
import { train } from '../../../assets';

import './style.css';

const Logo = (props) => {
    return(
        <div className='Logo'>
            <img src={train} alt='#' />
        </div>
    );
}

export default Logo;