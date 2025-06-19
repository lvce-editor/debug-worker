import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const deleteAllWatchExpressions = (state: RunAndDebugState): RunAndDebugState => {
  return {
    ...state,
    watchExpressions: [],
  }
}
