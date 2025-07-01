import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { collapseScopeChain } from '../CollapseScopeChain/CollapseScopeChain.ts'
import { expandScopeChain } from '../ExpandScopeChain/ExpandScopeChain.ts'

export const handleClickScopeValueIndex = async (state: RunAndDebugState, index: number): Promise<RunAndDebugState> => {
  const { scopeChain, debugId, expandedIds, visibleRows } = state

  if (index < 0 || index >= visibleRows.length) {
    return state
  }

  const row = visibleRows[index]
  if (!row.scopeChainIndex || row.scopeChainIndex < 0 || row.scopeChainIndex >= scopeChain.length) {
    return state
  }

  const scopeChainIndex = row.scopeChainIndex
  const element = scopeChain[scopeChainIndex]
  if (expandedIds.includes(element.objectId)) {
    return collapseScopeChain(state, expandedIds, scopeChain, element, scopeChainIndex)
  }
  return expandScopeChain(state, expandedIds, scopeChain, element, scopeChainIndex, debugId)
}
