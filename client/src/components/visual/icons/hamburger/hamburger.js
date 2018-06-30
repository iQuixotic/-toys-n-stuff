import React from "react";
import './style.css';
import { Icon } from 'react-fa';

// icon for opening sidedrawer
const Burger = (props) => {
    return(
    <div>
         <Icon name=" fa-bars" size={props.size} className='hamburger' {...props} />
    </div>
    );
}

export default Burger;


