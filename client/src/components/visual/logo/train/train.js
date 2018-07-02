import React from "react";
import { train } from '../../../../assets';

import './style.css';

const Train = (props) => {
    return(
        <div className='TrainLogo'>
            <img src={train} alt='#' {...props} />
        </div>
    );
}

export default Train;