import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { collapseScopeChain } from '../CollapseScopeChain/CollapseScopeChain.ts'
import { expandScopeChain } from '../ExpandScopeChain/ExpandScopeChain.ts'

export const handleClickScopeChainIndex = async (state: RunAndDebugState, scopeChainIndex: number): Promise<RunAndDebugState> => {
  const { expandedIds, scopeChain, debugId } = state
  const element = scopeChain[scopeChainIndex]
  if (expandedIds.includes(element.objectId)) {
    return collapseScopeChain(state, expandedIds, scopeChain, element, scopeChainIndex)
  }
  return expandScopeChain(state, expandedIds, scopeChain, element, scopeChainIndex, debugId)
}
