import type { CallStackItem } from '../CallStackItem/CallStackItem.ts'
import type { ParsedScriptMap } from '../ParsedScriptMap/ParsedScriptMap.ts'
import type { ScopeChainItem } from '../ScopeChainItem/ScopeChainItem.ts'

export interface PausedInfo2 {
  readonly scopeChain: readonly ScopeChainItem[]
  readonly callStack: readonly CallStackItem[]
  readonly pausedReason: any
  readonly pausedMessage: string
  readonly callFrameId: any
  readonly expandedIds: readonly any[]
  readonly scriptMap: ParsedScriptMap
}
