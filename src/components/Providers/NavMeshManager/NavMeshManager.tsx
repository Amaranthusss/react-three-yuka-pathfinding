import { useFrame } from '@react-three/fiber'

import * as YUKA from 'yuka'
import _ from 'lodash'

import { RootState } from '@react-three/fiber'

import { navMeshContext } from '@/contexts/navMeshContext'

export function NavMeshManager({
  children,
  getScene,
  getCamera,
  getRenderer,
  getEntityManager,
}: {
  children: JSX.Element
  getEntityManager: () => YUKA.EntityManager | null
  getRenderer: () => RootState['gl']
  getCamera: () => RootState['camera']
  getScene: () => RootState['scene']
}) {
  useFrame((state: RootState, delta: number) => {
    const entityManager = getEntityManager()

    if (_.isNull(entityManager)) {
      return
    }

    entityManager.update(delta)
    getRenderer().render(getScene(), getCamera())
  })

  return (
    <navMeshContext.Provider value={getEntityManager}>
      {children}
    </navMeshContext.Provider>
  )
}
