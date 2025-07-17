const FiTrendingUp = ({
  width = '24',
  height = '24',
  color = 'white',
  className = '',
}) => (
  <svg
    stroke={color}
    fill='none'
    strokeWidth='2'
    viewBox='0 0 24 24'
    strokeLinecap='round'
    strokeLinejoin='round'
    height={height}
    width={width}
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <polyline points='23 6 13.5 15.5 8.5 10.5 1 18'></polyline>
    <polyline points='17 6 23 6 23 12'></polyline>
  </svg>
)

export default FiTrendingUp
