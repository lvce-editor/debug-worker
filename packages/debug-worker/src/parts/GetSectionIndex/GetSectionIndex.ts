import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import { getRunAndDebugVisibleRows } from '../GetRunAndDebugVisibleRows/GetRunAndDebugVisibleRows.ts'

export const getSectionIndex = (state: RunAndDebugState, name: string): number => {
  const rows = getRunAndDebugVisibleRows(state)
  return rows.findIndex((row) => row.type === DebugRowType.SectionHeading && row.name === name)
}
