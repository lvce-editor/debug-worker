import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const selectIndex = (state: RunAndDebugState, index: number): RunAndDebugState => {
  return {
    ...state,
    selectedIndex: index,
  }
}
