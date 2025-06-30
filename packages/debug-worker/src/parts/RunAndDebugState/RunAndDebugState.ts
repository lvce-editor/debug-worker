import type { CallStackItem } from '../CallStackItem/CallStackItem.ts'
import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { ParsedScriptMap } from '../ParsedScriptMap/ParsedScriptMap.ts'
import type { ScopeChainItem } from '../ScopeChainItem/ScopeChainItem.ts'
import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'

export interface RunAndDebugState {
  readonly id: number
  readonly disposed: boolean
  readonly processes: readonly any[]
  readonly debugState: number
  readonly watchExpanded: boolean
  readonly breakPointsExpanded: boolean
  readonly scopeExpanded: boolean
  readonly callStackExpanded: boolean
  readonly watchVisible: boolean
  readonly breakPointsVisible: boolean
  readonly scopeVisible: boolean
  readonly callStackVisible: boolean
  readonly scopeChain: readonly ScopeChainItem[]
  readonly callStack: readonly CallStackItem[]
  readonly parsedScripts: ParsedScriptMap
  readonly pausedReason: string
  readonly pausedMessage: string
  readonly debugInputValue: string
  readonly debugOutputValue: string
  readonly callFrameId: string
  readonly expandedIds: readonly any[]
  readonly scopeFocusedIndex: number
  readonly focusedIndex: number
  readonly pauseOnExceptionState: string
  readonly cache: any // TODO maybe store cache in extension host worker
  readonly exceptionBreakPoints: number
  readonly debugId: any
  readonly watchExpressions: readonly WatchExpression[]
  readonly focus: number
  readonly editingValue: string
  readonly inputSource: number
  readonly editingselectionstart: number
  readonly editingselectionend: number
  readonly openFilesOnPause: boolean
  readonly maxDescriptionLength: number
  readonly selectedIndex: number
  readonly visibleRows: readonly DebugRow[]
  readonly tokenColoringEnabled?: boolean
  readonly topLevelCount: number
}
