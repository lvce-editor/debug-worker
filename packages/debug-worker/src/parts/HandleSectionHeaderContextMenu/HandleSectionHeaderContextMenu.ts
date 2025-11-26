import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as ContextMenu from '../ContextMenu/ContextMenu.ts'
import * as MenuEntryId from '../MenuEntryId/MenuEntryId.ts'

export const handleSectionHeaderContextMenu = async (state: RunAndDebugState, x: number, y: number, id: string): Promise<RunAndDebugState> => {
  await ContextMenu.show(x, y, MenuEntryId.DebugWatchSectionHeading)
  return state
}
