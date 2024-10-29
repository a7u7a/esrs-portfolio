import { useControls } from 'leva'

const step = 0.01

const Controls = () => useControls({
  bfY: {
    value: 0.001,
    min: 0,
    max: 1,
    step,
  },
  bfX: {
    value: 0.001,
    min: 0,
    max: 1,
    step,
  },
  
})

export default Controls
