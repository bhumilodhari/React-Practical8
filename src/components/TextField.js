import React from 'react'

const TextField = (props) => {
    return (
        <div className="mb-3">
            <label htmlFor={props.name} className="form-label">{props.label}</label>
            <input
                type={props.type}
                name={props.name}
                className="form-control"
                id={props.id}
                onChange={props.onChange}
                onBlur={props.onBlur}
                placeholder={props.placerholder} />
            {props.touched && props.error && (
                <div className='error'>{props.error}</div>
            )
            }
        </div>
    )
}

export default TextField