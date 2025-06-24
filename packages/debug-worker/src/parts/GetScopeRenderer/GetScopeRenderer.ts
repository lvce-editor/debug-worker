import type { Scope } from '../Scope/Scope.ts'
import type { ScopeRenderer } from '../ScopeRenderer/ScopeRenderer.ts'
import * as DebugScopeChainType from '../DebugScopeChainType/DebugScopeChainType.ts'
import { getNoopRows } from '../ScopeRenderers/GetNoopRows.ts'
import { getScopeExceptionRows } from '../ScopeRenderers/GetScopeExceptionRows.ts'
import { getScopePropertyRows } from '../ScopeRenderers/GetScopePropertyRows.ts'
import { getScopeScopeRows } from '../ScopeRenderers/GetScopeScopeRows.ts'
import { getScopeThisRows } from '../ScopeRenderers/GetScopeThisRows.ts'

export const getScopeRenderer = (type: number): ScopeRenderer => {
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
