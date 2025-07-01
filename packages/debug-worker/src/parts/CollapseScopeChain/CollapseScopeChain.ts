import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import type { ScopeChainItem } from '../ScopeChainItem/ScopeChainItem.ts'
import * as Arrays from '../Arrays/Arrays.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

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

export const collapseScopeChain = (
  state: RunAndDebugState,
  expandedIds: readonly string[],
  scopeChain: readonly ScopeChainItem[],
  element: ScopeChainItem,
  scopeChainIndex: number,
  index: number,
): RunAndDebugState => {
  const { cache } = state
  const newExpandedIds = Arrays.removeElement(expandedIds, element.objectId)
  const { newScopeChain, newCache } = getCollapsedScopeChain(cache, scopeChain, element, scopeChainIndex)
  const newState: RunAndDebugState = {
    ...state,
    expandedIds: newExpandedIds,
    scopeChain: newScopeChain,
    scopeFocusedIndex: scopeChainIndex,
    cache: newCache,
    focus: WhenExpression.FocusDebugRow,
    focusedIndex: index,
    selectedIndex: index,
  }
  return updateVisibleRows(newState)
}
