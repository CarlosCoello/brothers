import React from 'react';
import PropTypes from 'prop-types';

const Option = (props) => {
    return(
        <option key={props.keys} value={props.value} selected={props.selected}>
            {props.innerText}
        </option>
    )
}

Option.propTypes = {
    keys: PropTypes.string,
    value: PropTypes.string,
    innerText: PropTypes.string
}

export default Option;