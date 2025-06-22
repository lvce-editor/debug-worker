import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import { deleteWatchExpression } from '../DeleteWatchExpression/DeleteWatchExpression.ts'

export const handleDelete = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { selectedIndex, visibleRows } = state

  if (selectedIndex < 0 || selectedIndex >= visibleRows.length) {
    return state
  }

  const currentRow = visibleRows[selectedIndex]

  if (currentRow.type !== DebugRowType.WatchExpression || currentRow.index === undefined) {
    return state
  }

  const watchIndex = currentRow.index
  return deleteWatchExpression(state, watchIndex)
}
