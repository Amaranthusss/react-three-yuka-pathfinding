import { useCallback } from 'react'

import THREE from 'three'
import _ from 'lodash'

import { VehicleComponent } from '../Vehicle/Vehicle.interface'
import { InitFcn } from '@/components/Game/hooks/useNavMesh'

export const useInitialization = (init: InitFcn) => {
  const onVehicleInitialized = useCallback(
    (vehicleComponent: VehicleComponent): void => {
      const mesh: THREE.Mesh | null = vehicleComponent.getMesh()

      if (_.isNull(mesh)) {
        console.error(`${errorPath} / useEffect()
				\n Vehicle mesh is null`)
        return
      }

      init(mesh)
    },
    [init]
  )

  return { onVehicleInitialized }
}

const errorPath = `components / Game / hooks / useInitialization`
