import type { ParsedScriptMap } from '../ParsedScriptMap/ParsedScriptMap.ts'

export interface PausedInfo2 {
  readonly scopeChain: readonly any[]
  readonly callStack: readonly any[]
  readonly pausedReason: any
  readonly pausedMessage: string
  readonly callFrameId: any
  readonly expandedIds: readonly any[]
  readonly scriptMap: ParsedScriptMap
}
