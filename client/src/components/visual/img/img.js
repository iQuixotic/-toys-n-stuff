import React from "react";


import './style.css';

const Img = (props) => {
    return (
            <img  className='Img' alt={props.alt} {...props}/>
    );
}

export default Img;