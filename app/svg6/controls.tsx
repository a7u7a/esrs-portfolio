import { useControls } from 'leva'

const step = 0.01

const Controls = () => useControls({
  text: 'hola',
  stdDev: {
    value: 0.95,
    min: 0,
    max: 20,
    step,
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
    value: 52.32,
    min: 10,
    max: 200,
    step,
  },
  specConst1: {
    value: 10.00,
    min: 0,
    max: 10,
    step,
  },
  specExp1: {
    value: 7.81,
    min: 0,
    max: 100,
    step,
  },
  specConst2: {
    value: 1.08,
    min: 0,
    max: 10,
    step,
  },
  specExp2: {
    value: 2.93,
    min: 0,
    max: 100,
    step,
  },
  operator1: {
    value: 'lighter',
    options: ['lighter', 'arithmetic', 'over', 'xor', 'atop', 'out', 'in'],
  },
  operator2: {
    value: 'lighter',
    options: ['lighter', 'arithmetic', 'over', 'xor', 'atop', 'out', 'in'],
  },
  glow: {
    value: -3.51,
    min: -10,
    max: 10,
    step,
  },
  shift: {
    value: 1.06,
    min: -2,
    max: 2,
    step,
  },
})

export default Controls
