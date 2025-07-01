import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { handleClickScopeChainIndex } from '../HandleClickScopeChainIndex/HandleClickScopeChainIndex.ts'

export const handleClickScopeValueIndex = async (state: RunAndDebugState, index: number): Promise<RunAndDebugState> => {
  const { scopeChain, visibleRows } = state

  if (index < 0 || index >= visibleRows.length) {
    return state
  }

  const row = visibleRows[index]
  if (typeof row.scopeChainIndex !== 'number' || row.scopeChainIndex < 0 || row.scopeChainIndex >= scopeChain.length) {
    return state
  }
  const scopeChainIndex = row.scopeChainIndex
  return handleClickScopeChainIndex(state, scopeChainIndex, index)
}
