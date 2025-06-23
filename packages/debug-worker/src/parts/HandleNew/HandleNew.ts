import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { addWatchExpression } from '../AddWatchExpression/AddWatchExpression.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import { getRunAndDebugVisibleRows } from '../GetRunAndDebugVisibleRows/GetRunAndDebugVisibleRows.ts'
import * as InputName from '../InputName/InputName.ts'

export const handleNew = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { selectedIndex } = state
  const rows = getRunAndDebugVisibleRows(state)
  const row = rows[selectedIndex]

  if (row && (row.type === DebugRowType.WatchExpression || (row.type === DebugRowType.InputField && row.name === InputName.WatchExpressionInput))) {
    return addWatchExpression(state, '')
  }

  return state
}
