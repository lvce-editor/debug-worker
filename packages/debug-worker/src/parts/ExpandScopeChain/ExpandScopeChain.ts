import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import type { ScopeChainItem } from '../ScopeChainItem/ScopeChainItem.ts'
import * as GetChildScopeChain from '../GetChildScopeChain/GetChildScopeChain.ts'
import { updateVisibleRows } from '../UpdateVisibleRows/UpdateVisibleRows.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const expandScopeChain = async (
  state: RunAndDebugState,
  expandedIds: readonly string[],
  scopeChain: readonly ScopeChainItem[],
  element: any,
  index: number,
  debugId: any,
): Promise<RunAndDebugState> => {
  const { cache, maxDescriptionLength } = state
  const newScopeChain = await GetChildScopeChain.getChildScopeChain(cache, index, debugId, scopeChain, maxDescriptionLength)
  const objectId = scopeChain[index].objectId
  const newExpandedIds = [...expandedIds, objectId]
  const newState = {
    ...state,
    scopeChain: newScopeChain,
    expandedIds: newExpandedIds,
    scopeFocusedIndex: index,
    focus: WhenExpression.FocusDebugRow,
  }
  return updateVisibleRows(newState)
}
