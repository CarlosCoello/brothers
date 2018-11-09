import React from 'react';
import './Form.css';

const Form = (props) => {
    return(
        <form onSubmit={props.formOnSubmit}>
            {props.children}
        </form>
    )
}

export default Form;