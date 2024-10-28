import { useControls } from 'leva'

const step = 0.01

const Controls = () => useControls({
  deviation: {
    value: 0.96,
    min: 0,
    max: 20,
    step,
  },
  azimuth: {
    value: -35.92,
    min: -360,
    max: 360,
    step,
  },
  elevation: {
    value: 40,
    min: 0,
    max: 90,
    step,
  },
  fontSize: {
    value: 90.07,
    min: 10,
    max: 200,
    step,
  },
  specConst: {
    value: 4.60,
    min: 0,
    max: 10,
    step,
  },
  specExp: {
    value: 7.81,
    min: 0,
    max: 100,
    step,
  },
  glow: {
    value: -3.51,
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
  radius: {
    value: 100,
    min: 10,
    max: 300,
    step,
  }
})

export default Controls
