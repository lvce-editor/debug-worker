import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as ContextMenu from '../ContextMenu/ContextMenu.ts'

export const handleSectionHeaderContextMenu = async (state: RunAndDebugState, x: number, y: number, id: string): Promise<RunAndDebugState> => {
  const menuId = 123 // TODO register context menu items
  await ContextMenu.show(x, y, menuId)
  // TODO: Implement section header context menu handling
  return state
}
