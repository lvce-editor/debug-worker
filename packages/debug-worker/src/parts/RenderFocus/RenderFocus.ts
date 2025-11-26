import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'
import { getFocusSelector } from '../GetFocusSelector/GetFocusSelector.ts'

export const renderFocus = (oldState: RunAndDebugState, newState: RunAndDebugState): ViewletCommand => {
  const { uid: id, focus } = newState
  const selector = getFocusSelector(focus)
  if (!selector) {
    return ['Viewlet.focusElementByName', id, '']
  }
  return ['Viewlet.focusElementByName', id, selector]
}
