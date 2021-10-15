import React from 'react'
import PropTypes from 'prop-types'

const Input = props => {
    return (
        <input
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            onClick={props.onClick ? (e) => props.onClick(e) : null}
        />
    )
}

Input.propTypes = {
    types: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder:PropTypes.string,
    onClick: PropTypes.func,
}

export default Input
