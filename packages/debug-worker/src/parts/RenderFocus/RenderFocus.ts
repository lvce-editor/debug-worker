import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { getFocusSelector } from '../GetFocusSelector/GetFocusSelector.ts'

export const renderFocus = (oldState: RunAndDebugState, newState: RunAndDebugState): readonly any[] => {
  const { id, focus } = newState
  const selector = getFocusSelector(focus)
  if (!selector) {
    return ['Viewlet.focusElementByName', id, '']
  }
  return ['Viewlet.focusElementByName', id, selector]
}
