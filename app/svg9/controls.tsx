import { useControls } from 'leva'

const step = 0.01

const Controls = () => useControls('Turbulence Effect', {
  baseFreq: {
    value: 0.01,
    min: 0,
    max: 0.01,
    step: 0.00001
  },
  numOct: {
    value: 2,
    min: 0,
    max: 5,
    step: 1
  },
  baseFreq2: {
    value: 0.05,
    min: 0,
    max: 0.09,
    step: 0.00001
  },
  numOct2: {
    value: 2,
    min: 0,
    max: 5,
    step: 1
  },
  scale: {
    value: 92,
    min: 0,
    max: 100,
    step: 1
  },
 
})

export default Controls
