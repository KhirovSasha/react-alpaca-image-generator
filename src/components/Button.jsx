import React from "react";

const Button = ({emoji, action, name}) => {
    return (
        <button className="bottom-button" onClick={() => action()}>{emoji} {name}</button>
    );
}

export default Button;