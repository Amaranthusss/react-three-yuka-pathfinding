import { Gltf, OrbitControls, Stage, Stars } from '@react-three/drei'
import { EffectComposer } from '@react-three/postprocessing'
import { NavMeshManager } from '../Providers/NavMeshManager/NavMeshManager'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Lights } from './environment/Lights/Lights'
import { Bloom } from '@react-three/postprocessing'

import { useInitialization } from './hooks/useInitialization'
import { useCallback } from 'react'
import { useNavMesh } from '@/components/Game/hooks/useNavMesh'

import { lazy } from 'react'
import _ from 'lodash'

import { ThreeEvent } from '@react-three/fiber'
import { RootState } from '@react-three/fiber'

import styles from './Game.module.scss'

const Vehicle = lazy(() => import('@/components/Game/Vehicle/Vehicle'))

const platformModelPath: string = '/models/platform/demo-level.glb'

export default function Game(): JSX.Element {
  const {
    init,
    getScene,
    setScene,
    getCamera,
    setCamera,
    getRenderer,
    setRenderer,
    moveToPoint,
    getEntityManager,
  } = useNavMesh()

  const { onVehicleInitialized } = useInitialization(init)

  const onContextMenu = useCallback(
    (event: ThreeEvent<MouseEvent>): void => {
      moveToPoint(event)
    },
    [moveToPoint]
  )

  return (
    <div className={styles.container}>
      <Canvas
        shadows
        onCreated={({ gl, scene, camera }: RootState): void => {
          setScene(scene)
          setCamera(camera)
          setRenderer(gl)
        }}
      >
        <color attach={'background'} args={['#15151a']} />

        <OrbitControls />

        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
        </EffectComposer>

        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          speed={1}
          fade
        />

        <NavMeshManager
          getEntityManager={getEntityManager}
          getCamera={getCamera}
          getRenderer={getRenderer}
          getScene={getScene}
        >
          <Stage
            intensity={0.5}
            preset={'rembrandt'}
            adjustCamera={1}
            shadows={{
              type: 'accumulative',
              color: 'black',
              colorBlend: 2,
              opacity: 2,
            }}
            environment={'city'}
          >
            <Suspense fallback={null}>
              <Gltf src={platformModelPath} onContextMenu={onContextMenu} />
              <Vehicle
                onInitialized={onVehicleInitialized}
                groupProps={{ scale: 0.5 }}
              />
              <Lights />
            </Suspense>
          </Stage>
        </NavMeshManager>
      </Canvas>
    </div>
  )
}
