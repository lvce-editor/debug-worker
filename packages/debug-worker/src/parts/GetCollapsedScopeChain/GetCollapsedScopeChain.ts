import type { ScopeChainItem } from '../ScopeChainItem/ScopeChainItem.ts'
import { getCollapsedEndIndex } from '../GetCollapsedEndIndex/GetCollapsedEndIndex.ts'

export interface CollapsedScopeChainResult {
  readonly newScopeChain: readonly ScopeChainItem[]
  readonly newCache: any
}

export const getCollapsedScopeChain = (cache: any, scopeChain: readonly ScopeChainItem[], element: any, index: number): CollapsedScopeChainResult => {
  const indent = element.indent
  const endIndex = getCollapsedEndIndex(scopeChain, index, indent)
  if (endIndex === -1) {
    return {
      newScopeChain: scopeChain,
      newCache: cache,
    }
  }
  const newItems = scopeChain.slice(index + 1, endIndex)
  const newCache = {
    ...cache,
    [scopeChain[index].objectId]: newItems,
  }
  return {
    newScopeChain: [...scopeChain.slice(0, index + 1), ...scopeChain.slice(endIndex)],
    newCache,
  }
}
