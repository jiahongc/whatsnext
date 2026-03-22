'use client'

import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const ATMOSPHERE_VERTEX = `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const ATMOSPHERE_FRAGMENT = `
  varying vec3 vNormal;
  void main() {
    float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
    gl_FragColor = vec4(1.0, 0.7, 0.3, 1.0) * intensity;
  }
`

export function Earth() {
  const meshRef = useRef<THREE.Mesh>(null!)

  // Generate a procedural earth-like sphere with color bands
  const earthTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 256
    const ctx = canvas.getContext('2d')!

    // Ocean base
    ctx.fillStyle = '#1a3a5c'
    ctx.fillRect(0, 0, 512, 256)

    // Land masses (simplified, stylized)
    ctx.fillStyle = '#2d5a3d'
    // Add some organic shapes for continents
    const landShapes = [
      { x: 240, y: 60, rx: 40, ry: 30 },   // Europe
      { x: 280, y: 90, rx: 50, ry: 50 },   // Africa
      { x: 120, y: 70, rx: 60, ry: 35 },   // N. America
      { x: 140, y: 140, rx: 25, ry: 40 },  // S. America
      { x: 380, y: 80, rx: 80, ry: 40 },   // Asia
      { x: 420, y: 160, rx: 30, ry: 20 },  // Australia
    ]

    landShapes.forEach(({ x, y, rx, ry }) => {
      ctx.beginPath()
      ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2)
      ctx.fill()
    })

    // Warm tint overlay
    ctx.fillStyle = 'rgba(245, 158, 11, 0.06)'
    ctx.fillRect(0, 0, 512, 256)

    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true
    return texture
  }, [])

  // Slow auto-rotation
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05
    }
  })

  return (
    <group>
      {/* Earth sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          map={earthTexture}
          roughness={0.9}
          metalness={0.1}
        />
      </mesh>

      {/* Golden atmosphere glow */}
      <mesh scale={[1.15, 1.15, 1.15]}>
        <sphereGeometry args={[1, 64, 64]} />
        <shaderMaterial
          vertexShader={ATMOSPHERE_VERTEX}
          fragmentShader={ATMOSPHERE_FRAGMENT}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          transparent
        />
      </mesh>
    </group>
  )
}

export function Rig() {
  const { camera } = useThree()
  const pointer = useThree((state) => state.pointer)
  const vec = useMemo(() => new THREE.Vector3(), [])

  useFrame(() => {
    camera.position.lerp(
      vec.set(pointer.x * 0.3, pointer.y * 0.2, camera.position.z),
      0.02
    )
    camera.lookAt(0, 0, 0)
  })

  return null
}
