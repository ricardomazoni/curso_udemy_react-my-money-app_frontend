import React from 'react'
import { Link } from 'react-router'

/**
 * alterando o <a href pelo Link do react-router
 */

export default props => (
    <li>
        {/* <a href={props.path}> */}
        <Link to={props.path} >
            <i className={`fa fa-${props.icon}`}></i> 
            <span>
                {props.label}
            </span>
        </Link>    
        {/* </a> */}
    </li>
)