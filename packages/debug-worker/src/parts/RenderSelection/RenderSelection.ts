import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { getFocusSelector } from '../GetFocusSelector/GetFocusSelector.ts'

export const renderSelection = (oldState: RunAndDebugState, newState: RunAndDebugState): readonly any[] => {
  const { editingselectionstart, editingselectionend, focus, id } = newState
  const selector = getFocusSelector(focus)
  return ['Viewlet.setSelectionByName', id, selector, editingselectionstart, editingselectionend]
}
