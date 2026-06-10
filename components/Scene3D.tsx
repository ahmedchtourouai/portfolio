"use client"
import React, { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei/core/shaderMaterial'
import { OrbitControls } from '@react-three/drei/core/OrbitControls'
import * as THREE from 'three'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      gradientMaterial: any
    }
  }
}

const GradientMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorA: new THREE.Color('#0b1020'),
    uColorB: new THREE.Color('#2b0f5a'),
  },
  `varying vec2 vUv;
   void main(){
     vUv = uv;
     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
   }`,
  `uniform float uTime;
   uniform vec3 uColorA;
   uniform vec3 uColorB;
   varying vec2 vUv;
   float random(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453123); }
   float noise(vec2 p){
     vec2 i = floor(p);
     vec2 f = fract(p);
     float a = random(i);
     float b = random(i + vec2(1.0, 0.0));
     float c = random(i + vec2(0.0, 1.0));
     float d = random(i + vec2(1.0, 1.0));
     vec2 u = f * f * (3.0 - 2.0 * f);
     return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
   }
   void main(){
     float n = noise(vUv * 8.0 + uTime * 0.1);
     float intensity = smoothstep(0.0, 1.0, vUv.y + n * 0.08);
     vec3 color = mix(uColorA, uColorB, intensity);
     gl_FragColor = vec4(color, 1.0);
   }`
)
extend({ GradientMaterial })

function GradientBackdrop({ time }: { time: number }){
  const ref = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += 0.0008
    }
  })

  return (
    <mesh ref={ref} position={[0, 0, -2]} scale={[10, 10, 1]}>
      <planeGeometry args={[1, 1]} />
      <gradientMaterial uTime={time} />
    </mesh>
  )
}

function Particles({ count = 120, reduced = false }: { count?: number; reduced?: boolean }){
  const pointsRef = useRef<THREE.Points>(null!)
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      arr[i3 + 0] = (Math.random() - 0.5) * 8
      arr[i3 + 1] = (Math.random() - 0.5) * 4
      arr[i3 + 2] = (Math.random() - 0.5) * 6
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (reduced) return
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.015
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} itemSize={3} count={positions.length / 3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#7c3aed" transparent opacity={0.75} depthWrite={false} />
    </points>
  )
}

function SmoothCamera({ mouseFactor = 0.36, reduced = false }: { mouseFactor?: number; reduced?: boolean }){
  const { camera } = useThree()
  const target = useRef(new THREE.Vector3(0, 0, 5))

  useFrame((state) => {
    if (reduced) return
    const { mouse } = state
    const x = mouse.x * mouseFactor
    const y = mouse.y * mouseFactor * -1
    target.current.set(x, y, 5)
    camera.position.lerp(target.current, 0.08)
    camera.lookAt(0, 0, 0)
  })

  return null
}

function TimeController({ reduced, onTick }: { reduced: boolean; onTick: (delta: number) => void }){
  useFrame((_, delta) => {
    if (!reduced) {
      onTick(delta)
    }
  })
  return null
}

export default function Scene3D(){
  const [isMobile, setIsMobile] = useState(false)
  const [reduced, setReduced] = useState(false)
  const [time, setTime] = useState(0)

  useEffect(() => {
    const mq = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse), (max-width: 768px)')
    const rm = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)')

    setIsMobile(!!(mq && mq.matches))
    setReduced(!!(rm && rm.matches))

    const onChange = () => {
      setIsMobile(!!(mq && mq.matches))
      setReduced(!!(rm && rm.matches))
    }

    mq && mq.addEventListener && mq.addEventListener('change', onChange)
    rm && rm.addEventListener && rm.addEventListener('change', onChange)

    return () => {
      mq && mq.removeEventListener && mq.removeEventListener('change', onChange)
      rm && rm.removeEventListener && rm.removeEventListener('change', onChange)
    }
  }, [])

  const particleCount = isMobile ? 60 : 130

  return (
    <div className="w-full h-72 md:h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-950/20 bg-[#070a16]" role="img" aria-label="Hero 3D scene with floating AI particles and abstract geometry">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 1.5) : 1}>
        <color attach="background" args={["#070a16"]} />
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 5, 5]} intensity={0.85} />
        <SmoothCamera reduced={reduced} />
        <TimeController reduced={reduced} onTick={(delta) => setTime((value) => value + delta)} />
        <GradientBackdrop time={time} />
        <Particles count={particleCount} reduced={reduced} />
        {!isMobile && !reduced && (
          <mesh rotation={[0.45, 0.65, 0]} position={[0, 0, 0]}>
            <torusKnotGeometry args={[0.75, 0.22, 128, 32]} />
            <meshStandardMaterial metalness={0.9} roughness={0.18} color="#7c3aed" emissive="#2dd4bf" emissiveIntensity={0.14} />
          </mesh>
        )}
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  )
}
