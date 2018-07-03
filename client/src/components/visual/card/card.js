import React from "react";

import { 
    Img
} from '../../../components';

import './style.css';

const Card = (props) => {
    return(        
        <div className={props.picture ? 'card Card-Img' : 'card Card'}>
            <div className={props.picture ? 'Card-Img-Head' : 'Card-Head'}>
                {props.picture ? <Img src={props.src} alt={props.alt} /> : props.head}
            </div>
            <div className='Card-Body'>
                {props.children}
            </div>
        </div>
    );
}

export default Card;