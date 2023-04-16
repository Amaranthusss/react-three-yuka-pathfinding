import { useGLTF } from '@react-three/drei'

import { DodgeChallengerProps, GLTFResult } from './DodgeChallenger.interface'

const url: string = '/models/vehicle/scene-transformed.glb'

export function DodgeChallenger({
  groupProps,
}: DodgeChallengerProps): JSX.Element {
  const { nodes, materials } = useGLTF(url) as GLTFResult

  return (
    <group dispose={null} {...groupProps}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.02}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.75, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <group position={[0, -2, 0.19]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001.geometry}
                material={nodes.FBXASC04977025_black_001.material}
              />
            </group>
            <group position={[0, -2.04, 0.19]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_1.geometry}
                material={nodes.FBXASC04977025_black_001_1.material}
              />
            </group>
            <group position={[0, -1.84, 0.13]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_2.geometry}
                material={nodes.FBXASC04977025_black_001_2.material}
              />
            </group>
            <group position={[0, -1.84, 0.14]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_3.geometry}
                material={nodes.FBXASC04977025_black_001_3.material}
              />
            </group>
            <group position={[0, -2.34, -0.57]}>
              <mesh
                geometry={nodes.FBXASC04977025_yellow.geometry}
                material={materials.FBXASC04977025_yellow}
              />
            </group>
            <group position={[0, 0.46, 0.18]}>
              <mesh
                geometry={nodes.FBXASC04977025_mattemetal_001.geometry}
                material={nodes.FBXASC04977025_mattemetal_001.material}
              />
            </group>
            <group position={[0, 0.17, 0.69]}>
              <mesh
                geometry={nodes.FBXASC04977025_darkglass.geometry}
                material={materials.FBXASC04977025_darkglass}
              />
            </group>
            <group position={[0, 0.17, 0.69]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_4.geometry}
                material={nodes.FBXASC04977025_black_001_4.material}
              />
            </group>
            <group position={[0, -2.15, -0.03]}>
              <mesh
                geometry={nodes.FBXASC04977025_mattemetal_001_1.geometry}
                material={nodes.FBXASC04977025_mattemetal_001_1.material}
              />
            </group>
            <group position={[0, -2.15, -0.03]}>
              <mesh
                geometry={nodes.FBXASC04977025_lightglass_001.geometry}
                material={nodes.FBXASC04977025_lightglass_001.material}
              />
            </group>
            <group position={[0, -0.93, -0.02]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_5.geometry}
                material={nodes.FBXASC04977025_black_001_5.material}
              />
            </group>
            <group position={[-0.85, -1.55, -0.39]}>
              <mesh
                geometry={nodes.FBXASC04977025_brakedisk_001.geometry}
                material={nodes.FBXASC04977025_brakedisk_001.material}
              />
            </group>
            <group position={[-0.84, -1.41, -0.38]}>
              <mesh
                geometry={nodes.FBXASC04977025_red_001.geometry}
                material={nodes.FBXASC04977025_red_001.material}
              />
            </group>
            <group position={[-0.82, -1.55, -0.39]}>
              <mesh
                geometry={nodes.FBXASC04977025_tire_001.geometry}
                material={nodes.FBXASC04977025_tire_001.material}
              />
            </group>
            <group position={[-0.9, -1.55, -0.39]}>
              <mesh
                geometry={nodes.FBXASC04977025_chrome_001.geometry}
                material={nodes.FBXASC04977025_chrome_001.material}
              />
            </group>
            <group position={[-0.91, -1.55, -0.39]}>
              <mesh
                geometry={nodes.FBXASC04977025_chrome_001_1.geometry}
                material={nodes.FBXASC04977025_chrome_001_1.material}
              />
            </group>
            <group position={[-0.82, -1.55, -0.39]}>
              <mesh
                geometry={nodes.FBXASC04977025_rim_second_001.geometry}
                material={nodes.FBXASC04977025_rim_second_001.material}
              />
            </group>
            <group position={[0.84, -1.41, -0.38]}>
              <mesh
                geometry={nodes.FBXASC04977025_red_001_1.geometry}
                material={nodes.FBXASC04977025_red_001_1.material}
              />
            </group>
            <group position={[0.83, -1.55, -0.39]}>
              <mesh
                geometry={nodes.FBXASC04977025_rim_second_001_1.geometry}
                material={nodes.FBXASC04977025_rim_second_001_1.material}
              />
            </group>
            <group position={[0.85, -1.55, -0.39]}>
              <mesh
                geometry={nodes.FBXASC04977025_brakedisk_001_1.geometry}
                material={nodes.FBXASC04977025_brakedisk_001_1.material}
              />
            </group>
            <group position={[0.82, -1.55, -0.39]}>
              <mesh
                geometry={nodes.FBXASC04977025_tire_001_1.geometry}
                material={nodes.FBXASC04977025_tire_001_1.material}
              />
            </group>
            <group position={[0.9, -1.55, -0.39]}>
              <mesh
                geometry={nodes.FBXASC04977025_chrome_001_2.geometry}
                material={nodes.FBXASC04977025_chrome_001_2.material}
              />
            </group>
            <group position={[0.91, -1.55, -0.39]}>
              <mesh
                geometry={nodes.FBXASC04977025_chrome_001_3.geometry}
                material={nodes.FBXASC04977025_chrome_001_3.material}
              />
            </group>
            <group position={[-0.85, 1.41, -0.39]}>
              <mesh
                geometry={nodes.FBXASC04977025_brakedisk_001_2.geometry}
                material={nodes.FBXASC04977025_brakedisk_001_2.material}
              />
            </group>
            <group position={[-0.82, 1.41, -0.39]}>
              <mesh
                geometry={nodes.FBXASC04977025_tire_001_2.geometry}
                material={nodes.FBXASC04977025_tire_001_2.material}
              />
            </group>
            <group position={[-0.9, 1.41, -0.39]}>
              <mesh
                geometry={nodes.FBXASC04977025_chrome_001_4.geometry}
                material={nodes.FBXASC04977025_chrome_001_4.material}
              />
            </group>
            <group position={[-0.91, 1.41, -0.39]}>
              <mesh
                geometry={nodes.FBXASC04977025_chrome_001_5.geometry}
                material={nodes.FBXASC04977025_chrome_001_5.material}
              />
            </group>
            <group position={[-0.82, 1.41, -0.39]}>
              <mesh
                geometry={nodes.FBXASC04977025_rim_second_001_2.geometry}
                material={nodes.FBXASC04977025_rim_second_001_2.material}
              />
            </group>
            <group position={[0.85, 1.41, -0.39]}>
              <mesh
                geometry={nodes.FBXASC04977025_brakedisk_001_3.geometry}
                material={nodes.FBXASC04977025_brakedisk_001_3.material}
              />
            </group>
            <group position={[0.82, 1.41, -0.39]}>
              <mesh
                geometry={nodes.FBXASC04977025_tire_001_3.geometry}
                material={nodes.FBXASC04977025_tire_001_3.material}
              />
            </group>
            <group position={[0.9, 1.41, -0.39]}>
              <mesh
                geometry={nodes.FBXASC04977025_chrome_001_6.geometry}
                material={nodes.FBXASC04977025_chrome_001_6.material}
              />
            </group>
            <group position={[0.91, 1.41, -0.39]}>
              <mesh
                geometry={nodes.FBXASC04977025_chrome_001_7.geometry}
                material={nodes.FBXASC04977025_chrome_001_7.material}
              />
            </group>
            <group position={[0.83, 1.41, -0.39]}>
              <mesh
                geometry={nodes.FBXASC04977025_rim_second_001_3.geometry}
                material={nodes.FBXASC04977025_rim_second_001_3.material}
              />
            </group>
            <group position={[0, 0.01, 0.1]}>
              <mesh
                geometry={nodes.FBXASC04977025_carpaint_second_001.geometry}
                material={nodes.FBXASC04977025_carpaint_second_001.material}
              />
            </group>
            <group position={[0, 1.97, 0.34]}>
              <mesh
                geometry={nodes.FBXASC04977025_carpaint_001.geometry}
                material={nodes.FBXASC04977025_carpaint_001.material}
              />
            </group>
            <group position={[0, -1.64, 0.18]}>
              <mesh
                geometry={nodes.FBXASC04977025_carpaint_001_1.geometry}
                material={nodes.FBXASC04977025_carpaint_001_1.material}
              />
            </group>
            <group position={[0, -0.15, -0.11]}>
              <mesh
                geometry={nodes.FBXASC04977025_carpaint_001_2.geometry}
                material={nodes.FBXASC04977025_carpaint_001_2.material}
              />
            </group>
            <group position={[0.89, 1.52, 0.29]}>
              <mesh
                geometry={nodes.FBXASC04977025_chrome_001_8.geometry}
                material={nodes.FBXASC04977025_chrome_001_8.material}
              />
            </group>
            <group position={[0.88, 1.52, 0.28]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_6.geometry}
                material={nodes.FBXASC04977025_black_001_6.material}
              />
            </group>
            <group position={[0, 0.73, 0.11]}>
              <mesh
                geometry={nodes.FBXASC04977025_carpaint_001_3.geometry}
                material={nodes.FBXASC04977025_carpaint_001_3.material}
              />
            </group>
            <group position={[-0.84, 1.3, -0.46]}>
              <mesh
                geometry={nodes.FBXASC04977025_red_001_2.geometry}
                material={nodes.FBXASC04977025_red_001_2.material}
              />
            </group>
            <group position={[0, 0.31, -0.04]}>
              <mesh
                geometry={nodes.FBXASC04977025_interior_001.geometry}
                material={nodes.FBXASC04977025_interior_001.material}
              />
            </group>
            <group position={[0.84, 1.3, -0.46]}>
              <mesh
                geometry={nodes.FBXASC04977025_red_001_3.geometry}
                material={nodes.FBXASC04977025_red_001_3.material}
              />
            </group>
            <group position={[-0.79, -1.41, -0.38]}>
              <mesh
                geometry={nodes.FBXASC04977025_red_001_4.geometry}
                material={nodes.FBXASC04977025_red_001_4.material}
              />
            </group>
            <group position={[-0.78, -1.55, -0.39]}>
              <mesh
                geometry={nodes.FBXASC04977025_brakedisk_001_4.geometry}
                material={nodes.FBXASC04977025_brakedisk_001_4.material}
              />
            </group>
            <group position={[0, 0.23, 0.1]}>
              <mesh
                geometry={nodes.FBXASC04977025_interior_001_1.geometry}
                material={nodes.FBXASC04977025_interior_001_1.material}
              />
            </group>
            <group position={[-0.82, -1.55, -0.39]}>
              <mesh
                geometry={nodes.FBXASC04977025_tire_001_4.geometry}
                material={nodes.FBXASC04977025_tire_001_4.material}
              />
            </group>
            <group position={[0, 0.99, 0.69]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_7.geometry}
                material={nodes.FBXASC04977025_black_001_7.material}
              />
            </group>
            <group position={[0.46, -0.56, 0.21]}>
              <mesh
                geometry={nodes.FBXASC04977025_interior_001_2.geometry}
                material={nodes.FBXASC04977025_interior_001_2.material}
              />
            </group>
            <group position={[0, 0.45, 0.01]}>
              <mesh
                geometry={nodes.FBXASC04977025_interior_001_3.geometry}
                material={nodes.FBXASC04977025_interior_001_3.material}
              />
            </group>
            <group position={[0, 1, 0.72]}>
              <mesh
                geometry={nodes.FBXASC04977025_carpaint_001_4.geometry}
                material={nodes.FBXASC04977025_carpaint_001_4.material}
              />
            </group>
            <group position={[0, -0.53, 0.06]}>
              <mesh
                geometry={nodes.FBXASC04977025_interior_001_4.geometry}
                material={nodes.FBXASC04977025_interior_001_4.material}
              />
            </group>
            <group position={[0, -0.69, 0.43]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_8.geometry}
                material={nodes.FBXASC04977025_black_001_8.material}
              />
            </group>
            <group position={[0, -0.07, -0.27]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_9.geometry}
                material={nodes.FBXASC04977025_black_001_9.material}
              />
            </group>
            <group position={[0, 2.22, -0.43]}>
              <mesh
                geometry={nodes.FBXASC04977025_mattemetal_001_2.geometry}
                material={nodes.FBXASC04977025_mattemetal_001_2.material}
              />
            </group>
            <group position={[0, -2.21, -0.4]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_10.geometry}
                material={nodes.FBXASC04977025_black_001_10.material}
              />
            </group>
            <group position={[0, 2.38, 0.14]}>
              <mesh
                geometry={nodes.FBXASC04977025_chrome_001_9.geometry}
                material={nodes.FBXASC04977025_chrome_001_9.material}
              />
            </group>
            <group position={[0, 2.33, 0.15]}>
              <mesh
                geometry={nodes.FBXASC04977025_clearglass_001.geometry}
                material={nodes.FBXASC04977025_clearglass_001.material}
              />
            </group>
            <group position={[0, 2.36, 0.15]}>
              <mesh
                geometry={nodes.FBXASC04977025_redglass_001.geometry}
                material={nodes.FBXASC04977025_redglass_001.material}
              />
            </group>
            <group position={[0, 2.34, 0.14]}>
              <mesh
                geometry={nodes.FBXASC04977025_clearglass_001_1.geometry}
                material={nodes.FBXASC04977025_clearglass_001_1.material}
              />
            </group>
            <group position={[-0.59, 2.34, 0.33]}>
              <mesh
                geometry={nodes.FBXASC04977025_chrome_001_10.geometry}
                material={nodes.FBXASC04977025_chrome_001_10.material}
              />
            </group>
            <group position={[0, 2.38, 0.34]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_11.geometry}
                material={nodes.FBXASC04977025_black_001_11.material}
              />
            </group>
            <group position={[0, 2.34, 0.15]}>
              <mesh
                geometry={nodes.FBXASC04977025_chrome_001_11.geometry}
                material={nodes.FBXASC04977025_chrome_001_11.material}
              />
            </group>
            <group position={[0, 2.35, 0.14]}>
              <mesh
                geometry={nodes.FBXASC04977025_carpaint_second_001_1.geometry}
                material={nodes.FBXASC04977025_carpaint_second_001_1.material}
              />
            </group>
            <group position={[0, 2.38, 0.16]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_12.geometry}
                material={nodes.FBXASC04977025_black_001_12.material}
              />
            </group>
            <group position={[0, -1.02, 0.22]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_13.geometry}
                material={nodes.FBXASC04977025_black_001_13.material}
              />
            </group>
            <group position={[0, -2.32, -0.41]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_14.geometry}
                material={nodes.FBXASC04977025_black_001_14.material}
              />
            </group>
            <group position={[0, -2.22, -0.05]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_15.geometry}
                material={nodes.FBXASC04977025_black_001_15.material}
              />
            </group>
            <group position={[0, -2.19, -0.06]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_16.geometry}
                material={nodes.FBXASC04977025_black_001_16.material}
              />
            </group>
            <group position={[0, -2.11, -0.03]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_17.geometry}
                material={nodes.FBXASC04977025_black_001_17.material}
              />
            </group>
            <group position={[0, -2.06, -0.03]}>
              <mesh
                geometry={nodes.FBXASC04977025_chrome_001_12.geometry}
                material={nodes.FBXASC04977025_chrome_001_12.material}
              />
            </group>
            <group position={[0, -2.19, -0.04]}>
              <mesh
                geometry={nodes.FBXASC04977025_lightglass_001_1.geometry}
                material={nodes.FBXASC04977025_lightglass_001_1.material}
              />
            </group>
            <group position={[0, -2.09, -0.29]}>
              <mesh
                geometry={nodes.FBXASC04977025_chrome_001_13.geometry}
                material={nodes.FBXASC04977025_chrome_001_13.material}
              />
            </group>
            <group position={[0, -2.09, -0.29]}>
              <mesh
                geometry={nodes.FBXASC04977025_orangeglass_001.geometry}
                material={materials.FBXASC04977025_orangeglass_001}
              />
            </group>
            <group position={[0, 2.3, 0.34]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_18.geometry}
                material={nodes.FBXASC04977025_black_001_18.material}
              />
            </group>
            <group position={[0, -2.31, -0.41]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_19.geometry}
                material={nodes.FBXASC04977025_black_001_19.material}
              />
            </group>
            <group position={[0, 2.05, -0.18]}>
              <mesh
                geometry={nodes.FBXASC04977025_chrome_001_14.geometry}
                material={nodes.FBXASC04977025_chrome_001_14.material}
              />
            </group>
            <group position={[0, 2.05, -0.18]}>
              <mesh
                geometry={nodes.FBXASC04977025_redglass_001_1.geometry}
                material={nodes.FBXASC04977025_redglass_001_1.material}
              />
            </group>
            <group position={[0, 2.43, -0.25]}>
              <mesh
                geometry={nodes.FBXASC04977025_chrome_001_15.geometry}
                material={nodes.FBXASC04977025_chrome_001_15.material}
              />
            </group>
            <group position={[0, 2.43, -0.25]}>
              <mesh
                geometry={nodes.FBXASC04977025_redglass_001_2.geometry}
                material={nodes.FBXASC04977025_redglass_001_2.material}
              />
            </group>
            <group position={[0, 2.15, -0.37]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_20.geometry}
                material={nodes.FBXASC04977025_black_001_20.material}
              />
            </group>
            <group position={[0, -0.42, 0.28]}>
              <mesh
                geometry={nodes.FBXASC04977025_carpaint_001_5.geometry}
                material={nodes.FBXASC04977025_carpaint_001_5.material}
              />
            </group>
            <group position={[0, -0.06, -0.53]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_21.geometry}
                material={nodes.FBXASC04977025_black_001_21.material}
              />
            </group>
            <group position={[-0.03, -1.01, 0.24]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_22.geometry}
                material={nodes.FBXASC04977025_black_001_22.material}
              />
            </group>
            <group position={[0, -0.47, 0.2]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_23.geometry}
                material={nodes.FBXASC04977025_black_001_23.material}
              />
            </group>
            <group position={[0, -0.38, 0.31]}>
              <mesh
                geometry={nodes.FBXASC04977025_mirror_001.geometry}
                material={materials.FBXASC04977025_mirror_001}
              />
            </group>
            <group position={[0.36, -2.22, -0.06]}>
              <mesh
                geometry={nodes.FBXASC04977025_chrome_001_16.geometry}
                material={nodes.FBXASC04977025_chrome_001_16.material}
              />
            </group>
            <group position={[0, 0.72, 0.44]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_24.geometry}
                material={nodes.FBXASC04977025_black_001_24.material}
              />
            </group>
            <group position={[0, 0.18, 0.43]}>
              <mesh
                geometry={nodes.FBXASC04977025_windowglass_001.geometry}
                material={nodes.FBXASC04977025_windowglass_001.material}
              />
            </group>
            <group position={[0, 0.12, 0.43]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_25.geometry}
                material={nodes.FBXASC04977025_black_001_25.material}
              />
            </group>
            <group position={[0, -0.69, 0.43]}>
              <mesh
                geometry={nodes.FBXASC04977025_windowglass_001_1.geometry}
                material={nodes.FBXASC04977025_windowglass_001_1.material}
              />
            </group>
            <group position={[0, -2.17, -0.03]}>
              <mesh
                geometry={nodes.FBXASC04977025_clearglass_001_2.geometry}
                material={nodes.FBXASC04977025_clearglass_001_2.material}
              />
            </group>
            <group position={[0, -2.09, -0.03]}>
              <mesh
                geometry={nodes.FBXASC04977025_clearglass_001_3.geometry}
                material={nodes.FBXASC04977025_clearglass_001_3.material}
              />
            </group>
            <group position={[0, -2.11, -0.03]}>
              <mesh
                geometry={nodes.FBXASC04977025_chrome_001_17.geometry}
                material={nodes.FBXASC04977025_chrome_001_17.material}
              />
            </group>
            <group position={[0, -2.16, -0.03]}>
              <mesh
                geometry={nodes.FBXASC04977025_chrome_001_18.geometry}
                material={nodes.FBXASC04977025_chrome_001_18.material}
              />
            </group>
            <group position={[0, -2.15, -0.03]}>
              <mesh
                geometry={nodes.FBXASC04977025_clearglass_001_4.geometry}
                material={nodes.FBXASC04977025_clearglass_001_4.material}
              />
            </group>
            <group position={[0, 1.41, 0.52]}>
              <mesh
                geometry={nodes.FBXASC04977025_black_001_26.geometry}
                material={nodes.FBXASC04977025_black_001_26.material}
              />
            </group>
            <group position={[0, 1.41, 0.52]}>
              <mesh
                geometry={nodes.FBXASC04977025_windowglass_001_2.geometry}
                material={nodes.FBXASC04977025_windowglass_001_2.material}
              />
            </group>
            <group position={[0, 0.01, 0.1]}>
              <mesh
                geometry={nodes.FBXASC04977025_carpaint_001_6.geometry}
                material={nodes.FBXASC04977025_carpaint_001_6.material}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload(url)
