import React from "react";

import './style.css';

const Btn = (props) => {
    return(
        <a className="waves-effect waves-light btn Btn-mine" {...props}>
            {props.children}
        </a>
    );
}

export default Btn;