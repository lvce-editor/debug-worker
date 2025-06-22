import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import { editWatchExpression } from '../EditWatchExpression/EditWatchExpression.ts'
import { getRunAndDebugVisibleRows } from '../GetRunAndDebugVisibleRows/GetRunAndDebugVisibleRows.ts'

export const handleRename = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { selectedIndex } = state
  const rows = getRunAndDebugVisibleRows(state)
  const row = rows[selectedIndex]

  if (row && row.type === DebugRowType.WatchExpression && row.index !== undefined) {
    const watchIndex = row.index
    const watchExpression = state.watchExpressions[watchIndex]

    if (watchExpression && !watchExpression.isEditing) {
      return editWatchExpression(state, watchIndex)
    }
  }

  return state
}
