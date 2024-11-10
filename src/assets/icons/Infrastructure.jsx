import React from 'react'

const Infrastructure = ({
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
      strokeWidth={1.75}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='icon icon-tabler icons-tabler-outline icon-tabler-topology-ring-2'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M14 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z' />
      <path d='M7 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z' />
      <path d='M21 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z' />
      <path d='M7 18h10' />
      <path d='M18 16l-5 -8' />
      <path d='M11 8l-5 8' />
    </svg>
  )
}

export default Infrastructure
