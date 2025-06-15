import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const renderFocus = (state: RunAndDebugState): readonly any[] => {
  if (!state.focus) {
    return []
  }
  return ['Viewlet.setFocus', state.id, state.focus]
}
