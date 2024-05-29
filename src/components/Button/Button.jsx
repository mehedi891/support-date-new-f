import React from 'react'

function Button(props) {
    const {name} = props;
    return (
        <button className="button-82-pushable" role="button">
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">
                {name}
            </span>
        </button>
    )
}

export default Button