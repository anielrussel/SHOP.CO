import React from 'react'

const Button = ({title, primary, className}) => {
  return (
    <button className={`${primary ? 'bg-black text-white' : 'bg-sc-grayBtn text-red-500'} ${className}`}>{title}</button>
  )
}

export default Button