import { Environment } from '@react-three/drei'

export function Lights(): JSX.Element {
  return (
    <>
      <hemisphereLight args={[0x7095c1, 0xcbc1b2, 1.5]} position={[0, 50, 0]} />

      <Environment background={false} blur={2} preset={'sunset'} />
    </>
  )
}
