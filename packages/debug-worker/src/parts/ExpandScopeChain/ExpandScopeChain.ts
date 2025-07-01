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
  scopeChainIndex: number,
  debugId: any,
  index: number,
): Promise<RunAndDebugState> => {
  const { cache, maxDescriptionLength } = state
  const newScopeChain = await GetChildScopeChain.getChildScopeChain(cache, scopeChainIndex, debugId, scopeChain, maxDescriptionLength)
  const objectId = scopeChain[scopeChainIndex].objectId
  const newExpandedIds = [...expandedIds, objectId]
  const newState: RunAndDebugState = {
    ...state,
    scopeChain: newScopeChain,
    expandedIds: newExpandedIds,
    scopeFocusedIndex: scopeChainIndex,
    focus: WhenExpression.FocusDebugRow,
    focusedIndex: index,
  }
  return updateVisibleRows(newState)
}
