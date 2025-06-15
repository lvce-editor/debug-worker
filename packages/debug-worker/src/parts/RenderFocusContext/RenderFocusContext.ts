import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const renderFocusContext = (state: RunAndDebugState): readonly any[] => {
  const { focus } = state
  return ['Viewlet.setFocusContext', focus]
}
