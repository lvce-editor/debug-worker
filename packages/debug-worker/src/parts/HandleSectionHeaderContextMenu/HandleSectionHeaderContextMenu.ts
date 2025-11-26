import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as ContextMenu from '../ContextMenu/ContextMenu.ts'
import * as MenuEntryId from '../MenuEntryId/MenuEntryId.ts'

export const handleSectionHeaderContextMenu = async (state: RunAndDebugState, x: number, y: number, id: string): Promise<RunAndDebugState> => {
  const { uid: id } = state
  await ContextMenu.show2(id, MenuEntryId.DebugWatchSectionHeading, x, y, {
    menuId: MenuEntryId.DebugWatchSectionHeading,
  })
  return state
}
