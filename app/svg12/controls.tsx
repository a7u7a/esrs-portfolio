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
    value: 52.32,
    min: 10,
    max: 200,
    step,
  },
  specConstH: {
    value: 0.60,
    min: 0,
    max: 10,
    step,
  },
  specExpH: {
    value: 21.12,
    min: 0,
    max: 100,
    step,
  },
  specConstS: {
    value: 0.46,
    min: 0,
    max: 10,
    step,
  },
  specExpS: {
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
  }
})

export default Controls
