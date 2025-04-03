import React from "react";
import propTypes from "prop-types";

const Input = (props) =>{
    return(
    <div>
        <input type="text" id="nombreJugador" placeholder={props.placeHolder} onChange={props.onChange} itemID={props.id}/>
    </div>  
    )
}
Input.propTypes= {
    placeHolder: propTypes.string,
    onChange : propTypes.func,
    id : propTypes.string
}

export default Input