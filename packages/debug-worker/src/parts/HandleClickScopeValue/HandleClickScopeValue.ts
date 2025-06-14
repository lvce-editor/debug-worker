import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { collapseScopeChain } from '../CollapseScopeChain/CollapseScopeChain.ts'
import { expandScopeChain } from '../ExpandScopeChain/ExpandScopeChain.ts'
import * as Focus from '../Focus/Focus.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

const getElementIndex = (debugId: any, scopeChain: any, text: string): number => {
  for (let i = 0; i < scopeChain.length; i++) {
    const element = scopeChain[i]
    if (element.key === text) {
      return i
    }
  }
  return -1
}

export const handleClickScopeValue = async (state: RunAndDebugState, text: string): Promise<RunAndDebugState> => {
  const { scopeChain, debugId, expandedIds } = state
  Focus.setFocus(WhenExpression.FocusDebugScope)
  const index = getElementIndex(debugId, scopeChain, text)
  const element = scopeChain[index]
  if (expandedIds.includes(element.objectId)) {
    return collapseScopeChain(state, expandedIds, scopeChain, element, index)
  }
  return expandScopeChain(state, expandedIds, scopeChain, element, index, debugId)
}
