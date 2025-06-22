import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export interface CheckBoxClickHandler {
  (state: RunAndDebugState): Promise<RunAndDebugState>
}
