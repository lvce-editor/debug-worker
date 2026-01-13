import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'

export interface RestoredState {
  readonly breakPointsExpanded: boolean
  readonly editingValue: string
  readonly focus: number
  readonly scopeExpanded: boolean
  readonly watchExpanded: boolean
  readonly watchExpressions: readonly WatchExpression[]
}
