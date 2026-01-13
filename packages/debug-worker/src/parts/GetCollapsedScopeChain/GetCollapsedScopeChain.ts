import type { ScopeChainItem } from '../ScopeChainItem/ScopeChainItem.ts'
import { getCollapsedEndIndex } from '../GetCollapsedEndIndex/GetCollapsedEndIndex.ts'

export interface CollapsedScopeChainResult {
  readonly newCache: any
  readonly newScopeChain: readonly ScopeChainItem[]
}

export const getCollapsedScopeChain = (cache: any, scopeChain: readonly ScopeChainItem[], element: any, index: number): CollapsedScopeChainResult => {
  const { indent } = element
  const endIndex = getCollapsedEndIndex(scopeChain, index, indent)
  if (endIndex === -1) {
    return {
      newCache: cache,
      newScopeChain: scopeChain,
    }
  }
  const newItems = scopeChain.slice(index + 1, endIndex)
  const newCache = {
    ...cache,
    [scopeChain[index].objectId]: newItems,
  }
  return {
    newCache,
    newScopeChain: [...scopeChain.slice(0, index + 1), ...scopeChain.slice(endIndex)],
  }
}
