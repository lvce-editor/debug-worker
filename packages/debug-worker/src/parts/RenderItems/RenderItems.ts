import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as GetRunAndDebugVirtualDom2 from '../GetRunAndDebugVirtualDom2/GetRunAndDebugVirtualDom2.ts'
import * as GetRunAndDebugVisibleRows from '../GetRunAndDebugVisibleRows/GetRunAndDebugVisibleRows.ts'

export const renderItems = (oldState: RunAndDebugState, newState: RunAndDebugState): readonly any[] => {
  const rows = GetRunAndDebugVisibleRows.getRunAndDebugVisibleRows(newState)
  const dom = GetRunAndDebugVirtualDom2.getRunAndDebugVirtualDom2(rows)
  return ['Viewlet.setDom2', newState.id, dom]
}
