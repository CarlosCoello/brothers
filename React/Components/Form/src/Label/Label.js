import React from 'react';
import PropTypes from 'prop-types';

const Label = (props) => {
    return (
        <label>{props.innerText}</label>
    )
}

Label.propTypes = {
    innerText: PropTypes.string
}

export default Label;