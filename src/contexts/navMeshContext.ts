import { createContext } from 'react'

import { EntityManager } from 'yuka'

import { Context } from 'react'

export const navMeshContext: Context<() => EntityManager | null> =
  createContext<() => EntityManager | null>(() => null)
