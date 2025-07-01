import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const handleClickSectionUnknown = (state: RunAndDebugState): RunAndDebugState => {
  // For unknown section IDs, return the state unchanged
  return state
}
