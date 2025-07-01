import { handleClickScopeChainIndex } from '../HandleClickScopeChainIndex/HandleClickScopeChainIndex.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const handleClickScopeValueIndex = async (state: RunAndDebugState, index: number): Promise<RunAndDebugState> => {
  const { scopeChain, visibleRows } = state

  if (index < 0 || index >= visibleRows.length) {
    return state
  }

  const row = visibleRows[index]
  if (!row.scopeChainIndex || row.scopeChainIndex < 0 || row.scopeChainIndex >= scopeChain.length) {
    return state
  }
  const scopeChainIndex = row.scopeChainIndex
  return handleClickScopeChainIndex(state, scopeChainIndex)
}
