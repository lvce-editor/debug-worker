import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export interface SectionClickHandler {
  (state: RunAndDebugState): RunAndDebugState | Promise<RunAndDebugState>
}
