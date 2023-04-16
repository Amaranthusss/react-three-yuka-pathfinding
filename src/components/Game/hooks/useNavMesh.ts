import { useCallback, useRef, useState } from 'react'
import { useRefState } from '../../../hooks/useRefState'

import * as THREE from 'three'
import * as YUKA from 'yuka'
import _ from 'lodash'

import { createConvexRegionHelper } from '@/utils/createConvexRegionHelper'

import { RootState, ThreeEvent } from '@react-three/fiber'

const navMeshModelPath: string = '/models/navmesh/demo-level-navmesh.glb'

export function useNavMesh() {
  const [pathMaterial] = useState<THREE.LineBasicMaterial>(
    new THREE.LineBasicMaterial({ color: 0xff0000 })
  )

  const [pathHelper] = useState<THREE.Line>(
    new THREE.Line(new THREE.BufferGeometry(), pathMaterial)
  )

  const { get: getRenderer, set: setRenderer } = useRefState<RootState['gl']>()
  const { get: getCamera, set: setCamera } = useRefState<RootState['camera']>()
  const { get: getScene, set: setScene } = useRefState<RootState['scene']>()
  const { get: getEntityManager, set: setEntityManager } =
    useRefState<YUKA.EntityManager | null>(null)

  const navMesh = useRef<YUKA.NavMesh | null>(null)
  const navMeshGroup = useRef<THREE.Object3D<Event> | null>(null)
  const raycaster = useRef<THREE.Raycaster>(new THREE.Raycaster())
  const mouseCoordinates = useRef<THREE.Vector2>(new THREE.Vector2())
  const vehicle = useRef<YUKA.Vehicle | null>(null)
  const followPathBehavior = useRef<YUKA.FollowPathBehavior | null>(null)

  const sync = useCallback(
    (
      entity: YUKA.GameEntity,
      renderComponent: THREE.Mesh<
        THREE.BufferGeometry,
        THREE.Material | THREE.Material[]
      >
    ) => {
      //@ts-ignore YUKA.Matrix4 / THREE.Matrix4 differences
      renderComponent.matrix.copy(entity.worldMatrix)
    },
    []
  )

  const findPathTo = useCallback(
    (target: YUKA.Vector3): void => {
      if (_.isNull(vehicle.current) || _.isNull(navMesh.current)) {
        console.error(`${errorPath} / findPathTo()
				\n vehicle or navMesh is null
				\n vehicle: ${vehicle.current}
				\n navMesh: ${navMesh.current}`)
        return
      }

      const from: YUKA.Vector3 = vehicle.current.position
      const to: YUKA.Vector3 = target

      const path: THREE.Vector3[] =
        //@ts-ignore YUKA.Vector3 / THREE.Vector3 differences
        navMesh.current.findPath(from, to) as THREE.Vector3[]

      pathHelper.visible = true
      pathHelper.geometry.dispose()
      pathHelper.geometry = new THREE.BufferGeometry().setFromPoints(path)

      type FollowPathBehavior = YUKA.SteeringBehavior & { path: any }

      const followPathBehavior: FollowPathBehavior = _.first(
        vehicle.current.steering.behaviors
      ) as FollowPathBehavior

      followPathBehavior.active = true
      followPathBehavior.path.clear()

      for (const point of path) {
        followPathBehavior.path.add(point)
      }
    },
    [pathHelper]
  )

  const moveToPoint = useCallback(
    (event: ThreeEvent<MouseEvent>): void => {
      mouseCoordinates.current.x =
        (event.clientX / getRenderer().domElement.clientWidth) * 2 - 1
      mouseCoordinates.current.y =
        -(event.clientY / getRenderer().domElement.clientHeight) * 2 + 1

      raycaster.current.setFromCamera(mouseCoordinates.current, getCamera())

      if (_.isNull(navMeshGroup.current)) {
        console.error(`${errorPath} / moveToPoint 
				\n navMeshGroup is null`)
        return
      }

      const intersects: THREE.Intersection<THREE.Object3D<THREE.Event>>[] =
        raycaster.current.intersectObject(navMeshGroup.current, true)

      if (!_.isEmpty(intersects)) {
        const firstPoint: YUKA.Vector3 =
          //@ts-ignore YUKA.Vector3 / THREE.Vector3 differences
          intersects[0].point as YUKA.Vector3

        findPathTo(new YUKA.Vector3().copy(firstPoint))
      }
    },
    [getCamera, getRenderer, findPathTo]
  )

  const init = useCallback(
    (nextVehicleMesh: THREE.Mesh): void => {
      getCamera().position.set(25, 25, 0)
      getCamera().lookAt(getScene().position)

      // Path helper
      pathHelper.visible = false
      getScene().add(pathHelper)

      // Vehicle
      nextVehicleMesh.matrixAutoUpdate = false

      // Navigation mesh
      new YUKA.NavMeshLoader()
        .load(navMeshModelPath)
        .then((navigationMesh: YUKA.NavMesh): void => {
          // Visualize convex regions
          const nextNavMeshGroup: THREE.Object3D<Event> =
            //@ts-ignore
            createConvexRegionHelper(navigationMesh) as THREE.Object3D<Event>

          navMesh.current = navigationMesh
          navMeshGroup.current = nextNavMeshGroup
          getScene().add(nextNavMeshGroup)

          // Game setup
          setEntityManager(new YUKA.EntityManager())
          vehicle.current = new YUKA.Vehicle()
          followPathBehavior.current = new YUKA.FollowPathBehavior()

          if (_.isNull(vehicle.current)) {
            console.error(`${errorPath} / init()
					\n vehicle is null`)
            return
          }

          if (_.isNull(getEntityManager())) {
            console.error(`${errorPath} / init()
					\n getEntityManager returned null`)
            return
          }

          vehicle.current.maxSpeed = 2.5
          vehicle.current.maxForce = 100
          vehicle.current.setRenderComponent(nextVehicleMesh, sync)
          followPathBehavior.current.active = false
          vehicle.current.steering.add(followPathBehavior.current)
          getEntityManager()?.add(vehicle.current)
        })
    },
    [sync, getScene, getCamera, pathHelper, getEntityManager, setEntityManager]
  )

  return {
    init,
    getScene,
    setScene,
    getCamera,
    setCamera,
    getRenderer,
    setRenderer,
    moveToPoint,
    getEntityManager,
  }
}

const errorPath = `hooks / useNavMesh`

export type InitFcn = (vehicleMesh: THREE.Mesh) => void
