import * as DebugScopeChainType from '../DebugScopeChainType/DebugScopeChainType.ts'
import { getNoopRows, getScopeExceptionRows, getScopePropertyRows, getScopeScopeRows, getScopeThisRows } from '../ScopeRenderers/ScopeRenderers.ts'

export const getScopeRenderer = (type: any): any => {
  switch (type) {
    case DebugScopeChainType.This:
      return getScopeThisRows
    case DebugScopeChainType.Exception:
      return getScopeExceptionRows
    case DebugScopeChainType.Scope:
      return getScopeScopeRows
    case DebugScopeChainType.Property:
      return getScopePropertyRows
    default:
      return getNoopRows
  }
}
