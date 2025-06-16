import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { getFocusSelector } from '../GetFocusSelector/GetFocusSelector.ts'

export const renderInputValue = (oldState: RunAndDebugState, newState: RunAndDebugState): readonly any[] => {
  const { id, focus, editingValue } = newState
  const selector = getFocusSelector(focus)
  if (!selector) {
    return ['Viewlet.setValueByName', id, '', editingValue]
  }
  return ['Viewlet.setValueByName', id, selector, editingValue]
}
