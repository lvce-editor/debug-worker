import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { handleClickScopeValueIndex } from '../HandleClickScopeValueIndex/HandleClickScopeValueIndex.ts'
import { parseIndex } from '../ParseIndex/ParseIndex.ts'

export const handleClickScopeValue = async (state: RunAndDebugState, dataIndex: string, button: number): Promise<RunAndDebugState> => {
  const listIndex = parseIndex(dataIndex)
  return handleClickScopeValueIndex(state, listIndex)
}
