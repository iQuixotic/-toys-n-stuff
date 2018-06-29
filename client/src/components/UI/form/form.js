import React from "react";
import { Input,
        } from '../../index';

const Form = (props) => {
    return(
        <div className={props.cn}>
        (
            {props.cn} === 'login' ?
            <Input /> :
            <div> Null </div>
        )
            
        </div>
    );
}

export default Form;