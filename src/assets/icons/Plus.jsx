import React from 'react'

const Plus = ({ width = '24px', height = '24px', color = 'white' }) => {
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
      <line x1={12} y1={5} x2={12} y2={19} />
      <line x1={5} y1={12} x2={19} y2={12} />
    </svg>
  )
}

export default Plus
