import React from 'react'
interface ArrowUpRightProps {
  size?: number
  hover: boolean
}
const ArrowUpRight = ({ size = 32, hover }: ArrowUpRightProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={`${hover ? 'fill-esrs-blue stroke-esrs-blue' : 'fill-esrs-dark-gray stroke-esrs-dark-gray'} stroke-[9.5px] `}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
    </svg>
  )
}

export default ArrowUpRight