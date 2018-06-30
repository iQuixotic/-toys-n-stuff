import React from "react";

import './style.css';
 

const NavItem = (props) => {
    return(
           <li className='NavigationItem'><a href={props.link} {...props}>{props.children}</a></li>
    );
}

export default NavItem;