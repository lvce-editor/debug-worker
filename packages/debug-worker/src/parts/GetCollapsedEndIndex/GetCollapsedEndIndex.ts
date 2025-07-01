import type { ScopeChainItem } from '../ScopeChainItem/ScopeChainItem.ts'

export const getCollapsedEndIndex = (scopeChain: readonly ScopeChainItem[], startIndex: number, startIndent: number): number => {
  for (let i = startIndex + 1; i < scopeChain.length; i++) {
    if (scopeChain[i].indent <= startIndent) {
      return i
    }
  }
  return scopeChain.length
}
