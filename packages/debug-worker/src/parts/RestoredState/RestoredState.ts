import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'

export interface RestoredState {
  readonly watchExpressions: readonly WatchExpression[]
}
