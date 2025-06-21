import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { getRunAndDebugVisibleRows } from '../GetRunAndDebugVisibleRows/GetRunAndDebugVisibleRows.ts'

export const updateVisibleRows = (state: RunAndDebugState): RunAndDebugState => {
  const visibleRows = getRunAndDebugVisibleRows(state)
  return {
    ...state,
    visibleRows,
  }
}
