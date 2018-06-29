import React from "react";
import { Div,
         Input,
        
        } from '../../index';

const Form = (props) => {
    return(
        <div className={props.cn}>
        (
            {props.cn} === 'login' ?
            <Input /> :
            <Div> Null </Div>
        )
            
        </div>
    );
}

export default Form;