import React from "react";
import './style.css';
import { Icon } from 'react-fa';

// hamburger (industry term) icon for opening sidedrawer
const Burger = (props) => {
    return(
    <div>
         <Icon name=" fa-bars" size={props.size} className='Hamburger' {...props} />
    </div>
    );
}

export default Burger;


