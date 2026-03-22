'use client'

import { Canvas } from '@react-three/fiber'
import { Earth, Rig } from './Earth'

export default function GlobeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 2.8], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      dpr={[1, 2]}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
      fallback={null}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 3, 5]} intensity={1.0} color="#fff5e0" />
      <directionalLight position={[-3, -1, -3]} intensity={0.2} color="#fcd34d" />
      <Earth />
      <Rig />
    </Canvas>
  )
}
