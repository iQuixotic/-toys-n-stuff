import React from "react";

import './style.css';

const Form = (props) => {
    return (
        <div className='Form'>
            {props.children}
        </div>
    );
}


export default Form;