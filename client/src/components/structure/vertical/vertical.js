import React from "react";

import { 
    Img
} from '../../../components';

import './style.css';

const VerticalContent = (props) => {
    return(        
        <div className='Vertical'>
            <Img className='card Vertical-Image' src={props.src} alt={props.alt} />
            <div className='Vertical-Content'>
                {props.children}
            </div>
            <div className='Vertical-Toy-Rating'>
                Toy Rating: {props.toyRating}
            </div>
            <div className='Vertical-Seller-Rating'>            
                Seller Rating: {props.sellerRating}
            </div>
        </div>
    );
}

export default VerticalContent;