import type { CallStackItem } from '../CallStackItem/CallStackItem.ts'
import type { ParsedScriptMap } from '../ParsedScriptMap/ParsedScriptMap.ts'
import type { ScopeChainItem } from '../ScopeChainItem/ScopeChainItem.ts'

export interface PausedInfo2 {
  readonly callFrameId: any
  readonly callStack: readonly CallStackItem[]
  readonly expandedIds: readonly any[]
  readonly pausedMessage: string
  readonly pausedReason: any
  readonly scopeChain: readonly ScopeChainItem[]
  readonly scriptMap: ParsedScriptMap
}
