import { useControls } from 'leva'

const step = 0.01

const Controls = () => useControls('Turbulence Effect', {
  baseFreq: {
    value: 0.01,
    min: 0,
    max: 0.01,
    step: 0.00001
  },
  baseFreq2: {
    value: 0.05,
    min: 0,
    max: 0.09,
    step: 0.00001
  },
  scale: {
    value: 92,
    min: 0,
    max: 100,
    step: 1
  },
  text: 'hola',
  blur: {
    value: 1.15,
    min: 0,
    max: 5,
    step: 0.001
  },
  azimuth: {
    value: -50.75,
    min: -360,
    max: 360,
    step,
  },
  elevation: {
    value: 37.45,
    min: 0,
    max: 90,
    step,
  },
  fontSize: {
    value: 107.63,
    min: 10,
    max: 200,
    step,
  },
  specConstH: {
    value: 1.81,
    min: 0,
    max: 10,
    step,
  },
  specExpH: {
    value: 9.24,
    min: -10,
    max: 10,
    step,
  },
  specConstS: {
    value: 0.54,
    min: 0,
    max: 10,
    step,
  },
  specExpS: {
    value: 2.93,
    min: -10,
    max: 10,
    step,
  },
  glow: {
    value: -3.51,
    min: -10,
    max: 10,
    step,
  },
  shift: {
    value: 1.00,
    min: -2,
    max: 2,
    step,
  },
  operator: {
    value: 'lighter',
    options: ['lighter', 'over', 'in', 'out', 'atop', 'xor', 'arithmetic']
  }
})

export default Controls
