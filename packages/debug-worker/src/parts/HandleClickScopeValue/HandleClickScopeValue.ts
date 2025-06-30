import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { collapseScopeChain } from '../CollapseScopeChain/CollapseScopeChain.ts'
import { expandScopeChain } from '../ExpandScopeChain/ExpandScopeChain.ts'
import * as MouseEventType from '../MouseEventType/MouseEventType.ts'

const getElementIndex = (debugId: any, scopeChain: any, text: string): number => {
  for (let i = 0; i < scopeChain.length; i++) {
    const element = scopeChain[i]
    if (element.key === text) {
      return i
    }
  }
  return -1
}

// TODO pass index to function instead of text
export const handleClickScopeValue = async (state: RunAndDebugState, dataIndex: string, button: number): Promise<RunAndDebugState> => {
  // Return state unchanged if not left click
  if (button !== MouseEventType.LeftClick) {
    return state
  }

  const { scopeChain, debugId, expandedIds, visibleRows } = state

  const listIndex = Number.parseInt(dataIndex, 10)
  if (Number.isNaN(listIndex) || listIndex < 0 || listIndex >= visibleRows.length) {
    return state
  }

  const row = visibleRows[listIndex]
  if (!row.index || row.index < 0 || row.index >= scopeChain.length) {
    return state
  }

  const scopeChainIndex = row.index
  const element = scopeChain[scopeChainIndex]
  console.log({ element, scopeChainIndex })
  if (expandedIds.includes(element.objectId)) {
    return collapseScopeChain(state, expandedIds, scopeChain, element, scopeChainIndex)
  }
  return expandScopeChain(state, expandedIds, scopeChain, element, scopeChainIndex, debugId)
}
