import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import { getRunAndDebugVisibleRows } from '../GetRunAndDebugVisibleRows/GetRunAndDebugVisibleRows.ts'
import { getSectionClickHandler } from '../GetSectionClickHandler/GetSectionClickHandler.ts'
import { handleClickScopeValue } from '../HandleClickScopeValue/HandleClickScopeValue.ts'
import * as MouseEventType from '../MouseEventType/MouseEventType.ts'

export const handleArrowLeft = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { selectedIndex } = state
  const rows = getRunAndDebugVisibleRows(state)
  const row = rows[selectedIndex]
  if (row && row.type === DebugRowType.SectionHeading && row.expanded) {
    const clickHandler = getSectionClickHandler(row.key)
    return clickHandler(state)
  }
  if (row && row.type === DebugRowType.Scope && row.expanded) {
    return await handleClickScopeValue(state, selectedIndex.toString(), MouseEventType.LeftClick)
  }
  return state
}
