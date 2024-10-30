import { useControls } from 'leva'

const step = 0.01

const Controls = () => useControls({
  blur: {
    value: 1.44,
    min: 0,
    max: 5,
    step,
  },
  // azimuth: {
  //   value: -50.75,
  //   min: -360,
  //   max: 360,
  //   step,
  // },
  elevation: {
    value: 37.45,
    min: 0,
    max: 90,
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
    min: 0,
    max: 100,
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
    value: 1.06,
    min: -2,
    max: 2,
    step,
  }
})

export default Controls
