import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => {
    return(
        <select onChange={props.selectOnChange}>
            {props.children}
        </select>
    )
}

Select.propTypes = {
    selectOnChange: PropTypes.func
}

export default Select;