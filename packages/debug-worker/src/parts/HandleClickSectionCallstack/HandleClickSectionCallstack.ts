import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const handleClickSectionCallstack = (state: RunAndDebugState): RunAndDebugState => {
  const { callStackExpanded } = state
  return {
    ...state,
    callStackExpanded: !callStackExpanded,
    focusedIndex: 1, // TODO don't hardcode number
  }
}
