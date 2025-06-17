import type { SavedState } from '../SavedState/SavedState.ts'
import * as RunAndDebugStates from '../RunAndDebugStates/RunAndDebugStates.ts'

export const saveStateHotReload = (uid: number): SavedState => {
  const { newState } = RunAndDebugStates.get(uid)
  const { watchExpressions, scopeExpanded, watchExpanded, breakPointsExpanded, focus, editingValue, inputSource } = newState
  return {
    watchExpressions,
    scopeExpanded,
    breakPointsExpanded,
    watchExpanded,
    focus,
    editingValue,
    inputSource,
  }
}
