import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { addWatchExpression } from '../AddWatchExpression/AddWatchExpression.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import * as InputName from '../InputName/InputName.ts'

export const handleNew = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { selectedIndex, visibleRows } = state
  const row = visibleRows[selectedIndex]

  if (row && (row.type === DebugRowType.WatchExpression || (row.type === DebugRowType.InputField && row.name === InputName.WatchExpressionInput))) {
    return addWatchExpression(state, '')
  }

  return state
}
