/**
 * @author Mugen87 / https://github.com/Mugen87
 * @author Amaranthusss - typescript
 */

import * as THREE from 'three'
import _ from 'lodash'

import { HalfEdge, NavMesh, Polygon, Vector3 } from 'yuka'

function createConvexRegionHelper(navMesh: NavMesh): THREE.Mesh {
  const color: THREE.Color = new THREE.Color()
  const positions: number[] = []
  const colors: number[] = []
  const regions: Polygon[] = navMesh.regions
  const geometry: THREE.BufferGeometry = new THREE.BufferGeometry()
  const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
    vertexColors: true, //THREE.vertexColors,
  })

  const mesh = new THREE.Mesh(geometry, material)

  for (let region of regions) {
    // one color for each convex region
    const gray: number = _.random(true)

    color.setRGB(gray, gray, gray)

    // count edges
    const edges: HalfEdge[] = []
    let edge: HalfEdge | null = region.edge

    do {
      if (_.isNull(edge)) {
        console.error(`utils / createConvexRegionHelper
				\n edge is null, expected HalfEdge`)

        return mesh
      }

      edges.push(edge)

      edge = edge.next
    } while (edge !== region.edge)

    // triangulate
    const triangleCount: number = edges.length - 2

    for (let i: number = 1, l = triangleCount; i <= l; i++) {
      const v1: Vector3 = edges[0].vertex
      const v2: Vector3 = edges[i + 0].vertex
      const v3: Vector3 = edges[i + 1].vertex

      positions.push(v1.x, v1.y, v1.z)
      positions.push(v2.x, v2.y, v2.z)
      positions.push(v3.x, v3.y, v3.z)

      colors.push(color.r, color.g, color.b)
      colors.push(color.r, color.g, color.b)
      colors.push(color.r, color.g, color.b)
    }
  }

  geometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(positions, 3)
  )

  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))

  return mesh
}

export { createConvexRegionHelper }
