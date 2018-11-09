import React from 'react';
import PropTypes from 'prop-types';

const Validation = (props) => {
    return (
        <div>
            <p style={{color: 'red', margin: '0 0', textAlign: 'left'}}>{props.message}</p>
        </div>
    )
}

Validation.propTypes = {
    message: PropTypes.string
}

export default Validation;