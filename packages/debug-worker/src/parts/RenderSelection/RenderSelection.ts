import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const renderSelection = (oldState: RunAndDebugState, newState: RunAndDebugState): readonly any[] => {
  const { editingselectionstart, editingselectionend } = newState
  return ['setSelection', 'editingValue', editingselectionstart, editingselectionend]
}
