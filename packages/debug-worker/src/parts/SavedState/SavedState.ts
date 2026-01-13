import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'

export interface SavedState {
  readonly breakPointsExpanded: boolean
  readonly editingValue: string
  readonly focus: number
  readonly inputSource: number
  readonly scopeExpanded: boolean
  readonly watchExpanded: boolean
  readonly watchExpressions: readonly WatchExpression[]
}
