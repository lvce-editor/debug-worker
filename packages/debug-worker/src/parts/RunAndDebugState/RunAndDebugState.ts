export interface RunAndDebugState {
  readonly id: number
  readonly disposed: false
  readonly processes: []
  readonly debugState: number
  readonly watchExpanded: false
  readonly breakPointsExpanded: false
  readonly scopeExpanded: false
  readonly callstackExpanded: false
  readonly scopeChain: []
  readonly callStack: []
  readonly parsedScripts: any
  readonly pausedReason: string
  readonly pausedMessage: ''
  readonly debugInputValue: ''
  readonly debugOutputValue: ''
  readonly callFrameId: ''
  readonly expandedIds: []
  readonly scopeFocusedIndex: -1
  readonly focusedIndex: -1
  readonly pauseOnExceptionState: string
  readonly cache: any // TODO maybe store cache in extension host worker
  readonly exceptionBreakPoints: number
}
