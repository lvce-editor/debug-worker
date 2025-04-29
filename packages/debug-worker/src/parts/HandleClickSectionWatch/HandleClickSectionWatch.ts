import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const handleClickSectionWatch = (state: RunAndDebugState): RunAndDebugState => {
  const { watchExpanded } = state
  return {
    ...state,
    watchExpanded: !watchExpanded,
    focusedIndex: 0, // TODO don't hardcode number
  }
}
