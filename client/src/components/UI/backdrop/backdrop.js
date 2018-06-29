import React from "react";

import './style.css';

const BackDrop = (props) => {
    return(
        <div className='Backdrop'>
            {props.children}
        </div>
    );
}

export default BackDrop;