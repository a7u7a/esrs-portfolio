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
  stdDev: {
    value: 1.15,
    min: 0,
    max: 20,
    step: 0.001
  },
  stdDev2: {
    value: 1.15,
    min: 0,
    max: 20,
    step: 0.001
  },
  azimuth: {
    value: -50.75,
    min: -360,
    max: 360,
    step,
  },
  elevation: {
    value: 47.87,
    min: 0,
    max: 90,
    step,
  },
  specConst1: {
    value: 0.60,
    min: 0,
    max: 10,
    step,
  },
  specExp1: {
    value: 21.12,
    min: 0,
    max: 100,
    step,
  },
  specConst2: {
    value: 0.46,
    min: 0,
    max: 10,
    step,
  },
  specExp2: {
    value: 21.74,
    min: 0,
    max: 100,
    step,
  },
  glow: {
    value: -2.33,
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
  k1: {
    value: 1,
    min: 0,
    max: 1,
    step,
  },
  k2: {
    value: 0,
    min: 0,
    max: 1,
    step,
  },
  k3: {
    value: 0,
    min: 0,
    max: 1,
    step,
  },
  k4: {
    value: 0,
    min: 0,
    max: 1,
    step,
  },
})

export default Controls
