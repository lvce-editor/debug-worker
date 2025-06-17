import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'

export interface SavedState {
  readonly watchExpressions: readonly WatchExpression[]
  readonly watchExpanded: boolean
  readonly scopeExpanded: boolean
  readonly breakPointsExpanded: boolean
  readonly focus: number
  readonly editingValue: string
  readonly inputSource: number
}
