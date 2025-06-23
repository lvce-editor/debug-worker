import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import type { ViewletCommand } from '../ViewletCommand/ViewletCommand.ts'
import * as GetRunAndDebugVirtualDom2 from '../GetRunAndDebugVirtualDom2/GetRunAndDebugVirtualDom2.ts'

export const renderItems = (oldState: RunAndDebugState, newState: RunAndDebugState): ViewletCommand => {
  const rows = newState.visibleRows
  const selectedIndex = newState.selectedIndex
  const tokenColoringEnabled = newState.tokenColoringEnabled ?? true
  const dom = GetRunAndDebugVirtualDom2.getRunAndDebugVirtualDom2(rows, selectedIndex, tokenColoringEnabled)
  return ['Viewlet.setDom2', newState.id, dom]
}
