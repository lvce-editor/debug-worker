import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import { getCheckBoxClickHandler } from '../GetCheckBoxClickHandler/GetCheckBoxClickHandler.ts'

export const handleSpace = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { selectedIndex, visibleRows } = state

  if (selectedIndex < 0 || selectedIndex >= visibleRows.length) {
    return state
  }

  const currentRow = visibleRows[selectedIndex]

  if (currentRow.type === DebugRowType.CheckBox) {
    const clickHandler = getCheckBoxClickHandler(currentRow.name)
    return clickHandler(state)
  }

  return state
}
