export interface RunAndDebugState {
  readonly id: number
  readonly disposed: boolean
  readonly processes: []
  readonly debugState: number
  readonly watchExpanded: boolean
  readonly breakPointsExpanded: boolean
  readonly scopeExpanded: boolean
  readonly callStackExpanded: boolean
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
  readonly debugId?: any
}
