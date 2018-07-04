import React from "react";

import './style.css';
 

const NavItem = (props) => {
    return (
        <li className='NavigationItem'>
            <a className={props.active ? 'active' : null} href={props.link} >
                {props.children}
            </a>
        </li>
    );
}

export default NavItem;