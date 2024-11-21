import { CaretUp, CaretDown } from '@phosphor-icons/react';
import { useState } from 'react';
interface DividerProps {
  title: string
  subtitle?: string
  handleOpen: () => void
  handleClose: () => void
  expanded?: boolean
}

const Divider = ({ title, subtitle = "", handleOpen, handleClose, expanded }: DividerProps) => {
  const [buttonHover, setButtonHover] = useState(false);
  return (
    <div className="flex justify-between sm:grid sm:grid-cols-4 w-full font-semibold">
      <h2>{title}</h2>
      <h2 className='hidden sm:block col-span-2'>{subtitle}</h2>
      <div className='flex justify-end'>
        <button
          className='w-fit'
          onClick={expanded ? handleClose : handleOpen}
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          <label className='relative flex items-center h-full cursor-pointer' title={expanded ? 'Collapse collection' : 'Expand collection'}>
            <div className={`absolute right-0 transition-opacity duration-200 ${expanded ? 'opacity-100' : 'opacity-0'}`}>
              {/* <CaretInIcon color={buttonHover ? 'black' : '#848484'} size={26} /> */}
              <CaretUp color={buttonHover ? 'black' : '#848484'} size={26} />
            </div>
            <div className={`absolute right-0 transition-opacity duration-200 ${expanded ? 'opacity-0' : 'opacity-100'}`}>
              {/* <CaretUpDown color={buttonHover ? 'black' : '#848484'} size={26} /> */}
              <CaretDown color={buttonHover ? 'black' : '#848484'} size={26} />
            </div>
          </label>
          {/* {expanded ? "Collapse" : "Expand"} */}
        </button>
      </div>

    </div>
  )
}

export default Divider