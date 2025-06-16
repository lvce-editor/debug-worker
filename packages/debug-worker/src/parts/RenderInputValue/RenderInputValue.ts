import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { getFocusSelector } from '../GetFocusSelector/GetFocusSelector.ts'

export const renderInputValue = (state: RunAndDebugState): readonly any[] => {
  const { id, focus } = state
  const selector = getFocusSelector(focus)
  if (!selector) {
    return ['Viewlet.setValueByName', id, '']
  }
  return ['Viewlet.setValueByName', id, selector]
}
