import React from 'react'

function Button({
    className,
    onClick,
    value
}) {
  return (
    <button onClick={onClick} className={className}>
        {value}
    </button>
  )
}

export default Button