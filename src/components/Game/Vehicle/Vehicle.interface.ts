import { GroupProps } from '@react-three/fiber'

export interface VehicleComponent {
  getMesh: () => THREE.Mesh | null
}

export interface VehicleProps {
  groupProps?: GroupProps
  onInitialized: (component: VehicleComponent) => void
}
