import React from "react";

import './style.css';

const Btn = (props) => {
    return(
        <div className='Btn-mine'>
            {props.children}
        </div>
    );
}

export default Btn;