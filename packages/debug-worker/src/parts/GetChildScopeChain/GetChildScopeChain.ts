import type { ScopeChainItem } from '../ScopeChainItem/ScopeChainItem.ts'
import * as GetInnerChildScopeChain from '../GetInnerChildScopeChain/GetInnerChildScopeChain.ts'

export const getChildScopeChain = async (
  cache: any,
  index: number,
  debugId: any,
  scopeChain: readonly ScopeChainItem[],
  maxDescriptionLength: number,
): Promise<readonly ScopeChainItem[]> => {
  const element = scopeChain[index]
  const { objectId } = element
  const childScopeChain = await GetInnerChildScopeChain.getInnerChildScopeChain(cache, debugId, objectId, element.indent, maxDescriptionLength)
  const newScopeChain = [...scopeChain.slice(0, index + 1), ...childScopeChain, ...scopeChain.slice(index + 1)]
  return newScopeChain
}
