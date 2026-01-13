import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import type { ScopeChainItem } from '../ScopeChainItem/ScopeChainItem.ts'
import * as Arrays from '../Arrays/Arrays.ts'
import { getCollapsedScopeChain } from '../GetCollapsedScopeChain/GetCollapsedScopeChain.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

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
  const { newCache, newScopeChain } = getCollapsedScopeChain(cache, scopeChain, element, scopeChainIndex)
  const newState: RunAndDebugState = {
    ...state,
    cache: newCache,
    expandedIds: newExpandedIds,
    focus: WhenExpression.FocusDebugRow,
    focusedIndex: index,
    scopeChain: newScopeChain,
    scopeFocusedIndex: scopeChainIndex,
    selectedIndex: index,
  }
  return updateVisibleRows(newState)
}
