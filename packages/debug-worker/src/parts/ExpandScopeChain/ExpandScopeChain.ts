import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as GetChildScopeChain from '../GetChildScopeChain/GetChildScopeChain.ts'

export const expandScopeChain = async (state: RunAndDebugState, expandedIds: any, scopeChain: any, element: any, index: any, debugId: any): Promise<RunAndDebugState> => {
  const { cache, maxDescriptionLength } = state
  const newScopeChain = await GetChildScopeChain.getChildScopeChain(cache, index, debugId, scopeChain, maxDescriptionLength)
  const objectId = scopeChain[index].objectId
  const newExpandedIds = [...expandedIds, objectId]
  return {
    ...state,
    scopeChain: newScopeChain,
    expandedIds: newExpandedIds,
    scopeFocusedIndex: index,
  }
}
