import React from 'react'

function TabButton({ label,onClick }) {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  )
}

export default TabButton
