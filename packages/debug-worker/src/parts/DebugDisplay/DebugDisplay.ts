import * as DebugScopeType from '../DebugScopeType/DebugScopeType.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'

export const getScopeLabel = (element: any): string => {
  switch (element.type) {
    case DebugScopeType.Local:
      return DebugStrings.local()
    case DebugScopeType.Closure:
      if (element.name) {
        return DebugStrings.namedClosure(element.name)
      }
      return DebugStrings.closure()
    case DebugScopeType.Global:
      return DebugStrings.global()
    case DebugScopeType.Block:
      return DebugStrings.block()
    case DebugScopeType.WasmExpressionStack:
      return DebugStrings.expression()
    case DebugScopeType.Module:
      return DebugStrings.module2()
    case DebugScopeType.Eval:
      return DebugStrings.evalScope()
    case DebugScopeType.Script:
      return DebugStrings.script()
    case DebugScopeType.With:
      return DebugStrings.withScope()
    case DebugScopeType.Catch:
      return DebugStrings.catchScope()
    default:
      return element.type
  }
}

export { getDebugPausedMessage as getPausedMessage } from '../GetDebugPausedMessage/GetDebugPausedMessage.ts'
