import React from 'react'

/**
 * componente funcional para 
 * acrecentar cada lançamento
 * o input sera criado a cada nova inclusao
 * 
 */

export default props => (
    <input {...props.input}
        className='form-control'
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type}
    />
)