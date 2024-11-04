import { useControls, folder } from 'leva'

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
    value: 0.51,
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
    value: 72.84,
    min: 10,
    max: 200,
    step,
  },
  "Highlights": folder({
    specConstH: {
      value: 0.75,
      min: 0,
      max: 2,
      step,
    },
    specExpH: {
      value: 2.70,
      min: -10,
      max: 10,
      step,
    },
  }),
  "Shadows": folder({
  specConstS: {
    value: 0.76,
    min: 0,
    max: 2,
    step,
  },
  specExpS: {
    value: 2.93,
    min: -10,
    max: 10,
    step,
  },
}),
  glow: {
    value: -7.44,
    min: -10,
    max: 10,
    step,
  },
  shift: {
    value: 1.46,
    min: -2,
    max: 2,
    step,
  },
  bgBlur: {
    value: 10,
    min: 0,
    max: 50,
    step: 1
  },
  radius: {
    value: 56,
    min: 0,
    max: 500,
    step: 1
  },
  strokeWidth: {
    value: 50,
    min: 0,
    max: 500,
    step: 1
  }
})

export default Controls
