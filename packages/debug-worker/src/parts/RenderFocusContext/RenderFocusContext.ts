import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const renderFocusContext = (oldState: RunAndDebugState, newState: RunAndDebugState): readonly any[] => {
  const { focus } = newState
  return ['Viewlet.setFocusContext', focus]
}
