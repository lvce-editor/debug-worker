import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { getFocusSelector } from '../GetFocusSelector/GetFocusSelector.ts'

export const renderSelection = (oldState: RunAndDebugState, newState: RunAndDebugState): readonly any[] => {
  const { editingselectionstart, editingselectionend, focus } = newState
  const selector = getFocusSelector(focus)
  return ['Viewlet.setSelectionByName', selector, editingselectionstart, editingselectionend]
}
