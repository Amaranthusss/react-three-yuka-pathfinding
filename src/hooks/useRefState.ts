import { useCallback, useRef } from 'react'

/**
 * Hook useState but without rerendering component on state change.
 *
 * @param initValue Initial state value
 *
 * @example
 *
 * const { get: getStore, set: setStore } = useRefState<IStore[]>([])
 *
 * @default undefined
 */

export const useRefState = <T>(initValue?: any) => {
  const value = useRef<T>(initValue)

  const get = useCallback((): T => {
    return value.current
  }, [])

  const set = useCallback((nextValue: T): void => {
    value.current = nextValue
  }, [])

  return { get, set }
}
