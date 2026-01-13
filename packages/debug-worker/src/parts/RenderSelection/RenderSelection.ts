import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'
import { getFocusSelector } from '../GetFocusSelector/GetFocusSelector.ts'

export const renderSelection = (oldState: RunAndDebugState, newState: RunAndDebugState): ViewletCommand => {
  const { editingselectionend, editingselectionstart, focus, uid: id } = newState
  const selector = getFocusSelector(focus)
  return ['Viewlet.setSelectionByName', id, selector, editingselectionstart, editingselectionend]
}
