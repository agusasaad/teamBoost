import React from 'react'

const BackEnd = ({
  width = '24px',
  height = '24px',
  color = 'var(--violet)',
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      fill='none'
      stroke={color}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='icon icon-tabler icons-tabler-outline icon-tabler-code'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M7 8l-4 4l4 4' />
      <path d='M17 8l4 4l-4 4' />
      <path d='M14 4l-4 16' />
    </svg>
  )
}

export default BackEnd