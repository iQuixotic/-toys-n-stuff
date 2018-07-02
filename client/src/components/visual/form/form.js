import React from "react";

import {
    Train,
} from '../../../components';

import './style.css';

const Form = (props) => {
    return (
        <div className='Form'>
        
        <div className='red-line padd'>
                <Train id='form-train'/>
        </div>
            {props.children}
        </div>
    );
}


export default Form;