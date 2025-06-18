import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as ContextMenu from '../ContextMenu/ContextMenu.ts'

export const handleWatchExpressionContextMenu = async (state: RunAndDebugState, x: number, y: number, index: string): Promise<RunAndDebugState> => {
  const menuId = 124 // TODO register context menu items for watch expressions
  await ContextMenu.show(x, y, menuId)
  // TODO: Implement watch expression context menu handling
  return state
}
