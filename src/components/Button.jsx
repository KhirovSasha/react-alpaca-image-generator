import React from "react";

const Button = ({emoji, action}) => {
    return (
        <button className="bottom-button" onClick={() => action()}>{emoji} Button</button>
    );
}

export default Button;