import CVColumnLeft from "./cv-column-left"
import CVColumnRight from "./cv-column-right"

const CV = () => {
  return (
    <div className="grid grid-cols-4">
      <CVColumnLeft />
      <CVColumnRight />
    </div>
  )
}

export default CV