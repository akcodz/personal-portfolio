import Particles from '../../utils/particles'

import React from 'react'

const Background = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'fixed',top: 0, left: 0, zIndex: -1 }}>
  <Particles
    particleColors={['#50C878']}
    particleCount={400}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={400}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
  )
}

export default Background