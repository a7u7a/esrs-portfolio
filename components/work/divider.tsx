interface DividerProps {
  title: string
  subtitle?: string
}

const Divider = ({ title, subtitle = "" }: DividerProps) => {
  return (
    <div className="flex justify-between sm:grid sm:grid-cols-4 w-full font-semibold">
      <h2>{title}</h2>
      <h2 className='hidden sm:block col-span-2'>{subtitle}</h2>
      <h2 className='hidden sm:block text-right'>Date</h2>
    </div>
  )
}

export default Divider