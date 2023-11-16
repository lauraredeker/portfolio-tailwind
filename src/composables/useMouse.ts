import { useMouse } from '@vueuse/core'

/**
 * usage:
 * import { useMouseComposable } from '../composables/useMouse'
*  const { x, y } = useMouseComposable()
 */
export function useMouseComposable () {
  const { x, y } = useMouse()

  return { x, y }
}
