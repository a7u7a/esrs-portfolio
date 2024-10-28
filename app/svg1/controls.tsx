import { useControls } from 'leva'

const step = 0.01

const Controls = () => useControls({
  stroke: {
    value: 3,
    min: 0,
    max: 20,
    step,
  },
  radius: {
    value: 69.84,
    min: 30,
    max: 100,
    step,
  },
  deviation: {
    value: 3.30,
    min: 0,
    max: 20,
    step,
  },
  glow: {
    value: 18.83,
    min: 0,
    max: 30,
    step,
  },
  shift: {
    value: -0.13,
    min: -2,
    max: 2,
    step,
  },
  
})

export default Controls
