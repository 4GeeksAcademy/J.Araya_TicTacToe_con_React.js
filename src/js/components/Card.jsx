import React from "react";
import propTypes from "prop-types";



const Card = (props) => {
    return (
        <div onClick={props.onClick} className="card" style={{ minHeight: "120px" }} >
            <div className="card-body d-flex justify-content-center">
                {props.faType}
            </div>
        </div>

    );
};

Card.propTypes = {
    faType: propTypes.node,
    onClick: propTypes.func,

}
export default Card