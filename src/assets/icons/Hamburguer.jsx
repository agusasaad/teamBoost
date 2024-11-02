import React from 'react'

const Hamburguer = ({
  width = '24px',
  height = '24px',
  color = 'var(--black)',
}) => {
  return (
    <svg
      stroke={color}
      fill='none'
      strokeWidth={2}
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <line x1={4} x2={20} y1={12} y2={12} />
      <line x1={4} x2={20} y1={6} y2={6} />
      <line x1={4} x2={20} y1={18} y2={18} />
    </svg>
  )
}

export default Hamburguer
