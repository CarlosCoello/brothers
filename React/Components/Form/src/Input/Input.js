import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
    return (
        <input 
            type={props.type}
            name={props.name}
            className={props.className} 
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            onClick={props.onClick}
            disabled={props.disabled} />
    )
}

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default Input;