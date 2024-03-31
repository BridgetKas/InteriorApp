import React from 'react'
import styles from "./Button.module.css"

function Button(props) {
  const {title,textColor,bgColor,borderColor} = props
  return (
    <button>{title}</button>
  )
}

export default Button