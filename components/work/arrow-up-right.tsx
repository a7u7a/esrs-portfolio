import React from 'react'
interface ArrowUpRightProps {
  size?: number
}
const ArrowUpRight = ({ size = 32 }: ArrowUpRightProps) => {
  return (
    <svg
    width={size}
    height={size}
    fill="#000000"
    className='fill-esrs-dark-gray stroke-[9.5px] stroke-esrs-dark-gray'
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
    </svg>
  )
}

export default ArrowUpRight