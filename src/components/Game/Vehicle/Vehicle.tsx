import { DodgeChallenger } from './DodgeChallenger/DodgeChallenger'

import { useEffect, useRef } from 'react'

import { VehicleProps } from './Vehicle.interface'

export default function Vehicle({ groupProps, onInitialized }: VehicleProps) {
  const meshRef = useRef<THREE.Mesh | null>(null)

  useEffect((): void => {
    onInitialized({ getMesh: () => meshRef.current })
  }, [onInitialized])

  return (
    <mesh ref={meshRef}>
      <DodgeChallenger groupProps={groupProps} />
    </mesh>
  )
}
