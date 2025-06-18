import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as ContextMenu from '../ContextMenu/ContextMenu.ts'
import * as MenuEntryId from '../MenuEntryId/MenuEntryId.ts'

export const handleWatchExpressionContextMenu = async (state: RunAndDebugState, x: number, y: number, index: string): Promise<RunAndDebugState> => {
  await ContextMenu.show(x, y, MenuEntryId.DebugWatchExpression)
  return state
}
