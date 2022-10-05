import React from "react";
import "./button.css"


const Button = (props) =>{
    return(
        <button style={props.style} onClick={props.changeMode} className="btn">{props.children}</button>
    )
}


export default Button