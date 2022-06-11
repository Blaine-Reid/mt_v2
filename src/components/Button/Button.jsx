import React from 'react'
import {string, func} from 'prop-types'
import { jsx, css } from '@emotion/react'

const style ={
   backgroundColor: 'hotpink',
      '&:hover': {
        color: 'lightgreen'
      }
}

 const Button = ({label, icon, classNames, onclick}) => {
    
    // Handle clicking of Button using func passed in
    const handleClick = e => {
        e.preventDefault()
        onclick()
    }

    // Label is passed down, display a button (with icon if given)
    if (label){

        return (
        <button 
        css={style}
        onClick={handleClick}
        >
                {/* Display Icon if one is passed down */}
                {icon && <i className={`${icon} ${classNames}`}></i>}
                {/* Button Label */}
                {label}
        </button>
        )
    }

    // Else return a icon button only
    return(
        <i className={`${icon} ${classNames}`} onClick={onclick}></i>
    )
}

Button.propTypes = {
    label: string.isRequired,
    icon: string,
    classNames: string,
    func: func.isRequired
}


export default Button