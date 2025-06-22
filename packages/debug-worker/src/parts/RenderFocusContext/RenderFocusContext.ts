import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'

export const renderFocusContext = (oldState: RunAndDebugState, newState: RunAndDebugState): ViewletCommand => {
  const { focus } = newState
  return ['Viewlet.setFocusContext', focus]
}
