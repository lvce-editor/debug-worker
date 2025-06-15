import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const renderFocus = (state: RunAndDebugState): readonly any[] => {
  const { id, focus } = state
  if (!focus) {
    return ['Viewlet.focusElementByName', id, '']
  }
  return ['Viewlet.focusElementByName', id, focus]
}
