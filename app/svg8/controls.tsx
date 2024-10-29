import { useControls } from 'leva'

const step = 0.01

const Controls = () => useControls('Turbulence Effect', {
  baseFrequency: {
    value: 0.006,
    min: 0,
    max: 0.01,
    step: 0.00001
  },
  numOctaves: {
    value: 2,
    min: 0,
    max: 5,
    step: 1
  },
  baseFrequency2: {
    value: 0.05,
    min: 0,
    max: 0.09,
    step: 0.00001
  },
  numOctaves2: {
    value: 2,
    min: 0,
    max: 5,
    step: 1
  },
  scale: {
    value: 50,
    min: 0,
    max: 100,
    step: 1
  },
  stdDev: {
    value: 0,
    min: 0,
    max: 20,
    step: 0.001
  }
})

export default Controls
