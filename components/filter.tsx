import Controls from '@/app/svg14/controls'

interface EmbossFilterProps {
  angle: number
}

const EmbossFilter = ({ angle }: EmbossFilterProps) => {
  const { blur, elevation, specConstH, specExpH, specConstS, specExpS, glow, shift } = Controls()
  const azimuth = 35

  return (
    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
      <defs>
        <filter id="embossFilter">
          {/* Highlight effect */}
          <feGaussianBlur in="SourceGraphic" stdDeviation={blur} result="blur1" />
          <feSpecularLighting result="spec1" in="blur1" specularConstant={specConstH} specularExponent={specExpH} lightingColor="#ffffff">
            <feDistantLight azimuth={angle + 180} elevation={elevation} />
          </feSpecularLighting>

          <feColorMatrix
            in="spec1"
            type="matrix"
            values={`
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 ${glow} ${shift}`}
            result="highlight"
          />

          {/* Shadow effect */}
          <feGaussianBlur in="SourceGraphic" stdDeviation={blur} result="blur2" />
          <feSpecularLighting result="spec2" in="blur2" specularConstant={specConstS} specularExponent={specExpS} lightingColor="#ffffff">
            <feDistantLight azimuth={angle} elevation={elevation} />
          </feSpecularLighting>

          {/* Convert white to black for shadow */}
          <feColorMatrix
            in="spec2"
            type="matrix"
            values={`
              0 0 0 0 0
              0 0 0 0 0
              0 0 0 0 0
              0 0 0 ${glow} ${shift}`}
            result="shadow"
          />

          <feComposite in="shadow" in2="highlight" operator={"lighter"} result="shadowed" />

        </filter>
      </defs>
    </svg>
  )
}

export default EmbossFilter