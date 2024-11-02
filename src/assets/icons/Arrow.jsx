import React from 'react'

const Arrow = ({ width = '24px', height = '24px', color = 'var(--black)' }) => {
  return (
    <svg
      stroke='currentColor'
      fill={color}
      strokeWidth={0}
      viewBox='0 0 512 512'
      height={height}
      width={width}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={48}
        d='m268 112 144 144-144 144m124-144H100'
      />
    </svg>
  )
}

export default Arrow
