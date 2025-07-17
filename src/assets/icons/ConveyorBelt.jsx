const ConveyorBelt = (props) => (
  <svg
    stroke='currentColor'
    fill='none'
    strokeWidth='2'
    viewBox='0 0 24 24'
    strokeLinecap='round'
    strokeLinejoin='round'
    height='1em'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M10 20v2' />
    <path d='M14 20v2' />
    <path d='M18 20v2' />
    <path d='M21 20H3' />
    <path d='M6 20v2' />
    <path d='M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12' />
    <rect x='4' y='6' width='16' height='10' rx='2' />
  </svg>
)

export default ConveyorBelt
