import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as Arrays from '../Arrays/Arrays.ts'
import * as Focus from '../Focus/Focus.ts'
import * as GetChildScopeChain from '../GetChildScopeChain/GetChildScopeChain.ts'
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

const getCollapsedScopeChain = (cache: any, scopeChain: any, element: any, index: number): any => {
  const indent = element.indent
  for (let i = index + 1; i < scopeChain.length; i++) {
    if (scopeChain[i].indent <= indent) {
      const newItems = scopeChain.slice(index + 1, i)
      const newCache = {
        ...cache,
        [scopeChain[index].objectId]: newItems,
      }
      return {
        newScopeChain: [...scopeChain.slice(0, index + 1), ...scopeChain.slice(i)],
        newCache,
      }
    }
  }
  return {
    newScopeChain: scopeChain,
    newCache: cache,
  }
}

// TODO maybe store scope chain elements as tree
// TODO when collapsing, store collapsed elements by parent id in cache
// TODO when expanding, retrieve items from cache by parent id first
// if they don't exist, query the actual items

const collapse = (state: RunAndDebugState, expandedIds: readonly any[], scopeChain: any, element: any, index: number): RunAndDebugState => {
  const { cache } = state
  const newExpandedIds = Arrays.removeElement(expandedIds, element.objectId)
  const { newScopeChain, newCache } = getCollapsedScopeChain(cache, scopeChain, element, index)
  return {
    ...state,
    expandedIds: newExpandedIds,
    scopeChain: newScopeChain,
    scopeFocusedIndex: index,
    cache: newCache,
  }
}

const expand = async (state: RunAndDebugState, expandedIds: any, scopeChain: any, element: any, index: any, debugId: any): Promise<RunAndDebugState> => {
  const { cache } = state
  const newScopeChain = await GetChildScopeChain.getChildScopeChain(cache, index, debugId, scopeChain)
  const objectId = scopeChain[index].objectId
  const newExpandedIds = [...expandedIds, objectId]
  return {
    ...state,
    scopeChain: newScopeChain,
    expandedIds: newExpandedIds,
    scopeFocusedIndex: index,
  }
}

export const handleClickScopeValue = async (state: RunAndDebugState, text: string): Promise<RunAndDebugState> => {
  const { scopeChain, debugId, expandedIds } = state
  Focus.setFocus(WhenExpression.FocusDebugScope)
  const index = getElementIndex(debugId, scopeChain, text)
  const element = scopeChain[index]
  if (expandedIds.includes(element.objectId)) {
    return collapse(state, expandedIds, scopeChain, element, index)
  }
  return expand(state, expandedIds, scopeChain, element, index, debugId)
}
