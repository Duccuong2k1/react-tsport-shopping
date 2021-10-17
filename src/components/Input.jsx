import React from 'react'
import PropTypes from 'prop-types'

const Input = props => {
    return (
        <>

            <label htmlFor={props.id}>
            {props.label}
            </label>
            <input
                className={`input ${props.className}`}
                id={props.id}
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                onClick={props.onClick ? (e) => props.onClick(e) : null}
            />
        </>
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder:PropTypes.string,
    onClick: PropTypes.func,
    id:PropTypes.string,
    className:PropTypes.string,
}

export default Input
