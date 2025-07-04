import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { Scope } from '../Scope/Scope.ts'

export interface ScopeRenderer {
  (scope: Scope, relativeIndex: number, index: number): readonly DebugRow[]
}
