import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const handleClickSectionUnkown = (state: RunAndDebugState): RunAndDebugState => {
  const { callStackExpanded } = state
  return {
    ...state,
    callStackExpanded: !callStackExpanded,
  }
}
