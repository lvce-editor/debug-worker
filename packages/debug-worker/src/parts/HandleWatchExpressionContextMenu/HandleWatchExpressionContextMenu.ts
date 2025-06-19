import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as ContextMenu from '../ContextMenu/ContextMenu.ts'
import * as MenuEntryId from '../MenuEntryId/MenuEntryId.ts'
import { parseIndex } from '../ParseIndex/ParseIndex.ts'
import * as RunAndDebugStates from '../RunAndDebugStates/RunAndDebugStates.ts'

export const handleWatchExpressionContextMenu = async (state: RunAndDebugState, x: number, y: number, dataIndex: string): Promise<RunAndDebugState> => {
  const index = parseIndex(dataIndex)
  const newState: RunAndDebugState = {
    ...state,
    focusedIndex: index,
  }
  const { oldState } = RunAndDebugStates.get(state.id)
  RunAndDebugStates.set(state.id, oldState, newState)
  await ContextMenu.show(x, y, MenuEntryId.DebugWatchExpression)
  return state
}
