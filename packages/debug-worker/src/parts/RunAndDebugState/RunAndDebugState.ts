import type { CallStackItem } from '../CallStackItem/CallStackItem.ts'
import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { ParsedScriptMap } from '../ParsedScriptMap/ParsedScriptMap.ts'
import type { ScopeChainItem } from '../ScopeChainItem/ScopeChainItem.ts'
import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'

export interface RunAndDebugState {
  readonly breakPointsExpanded: boolean
  readonly breakPointsVisible: boolean
  readonly cache: any // TODO maybe store cache in extension host worker
  readonly callFrameId: string
  readonly callStack: readonly CallStackItem[]
  readonly callStackExpanded: boolean
  readonly callStackVisible: boolean
  readonly debugId: any
  readonly debugInputValue: string
  readonly debugOutputValue: string
  readonly debugState: number
  readonly disposed: boolean
  readonly editingselectionend: number
  readonly editingselectionstart: number
  readonly editingValue: string
  readonly exceptionBreakPoints: number
  readonly expandedIds: readonly any[]
  readonly focus: number
  readonly focusedIndex: number
  readonly inputSource: number
  readonly maxDescriptionLength: number
  readonly openFilesOnPause: boolean
  readonly parsedScripts: ParsedScriptMap
  readonly pausedMessage: string
  readonly pausedReason: string
  readonly pauseOnExceptionState: string
  readonly processes: readonly any[]
  readonly scopeChain: readonly ScopeChainItem[]
  readonly scopeExpanded: boolean
  readonly scopeFocusedIndex: number
  readonly scopeVisible: boolean
  readonly selectedIndex: number
  readonly tokenColoringEnabled?: boolean
  readonly topLevelCount: number
  readonly uid: number
  readonly visibleRows: readonly DebugRow[]
  readonly watchExpanded: boolean
  readonly watchExpressions: readonly WatchExpression[]
  readonly watchVisible: boolean
}
