import type { SavedState } from '../SavedState/SavedState.ts'
import * as RunAndDebugStates from '../RunAndDebugStates/RunAndDebugStates.ts'
import { SaveStateReasonHotReload } from '../SaveStateReason/SaveStateReason.ts'

export const saveState = (uid: number, reason: number): SavedState => {
  const { newState } = RunAndDebugStates.get(uid)
  const { watchExpressions, scopeExpanded, watchExpanded, breakPointsExpanded, focus, editingValue, inputSource } = newState

  if (reason === SaveStateReasonHotReload) {
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

  return {
    watchExpressions: watchExpressions.map((expr) => ({ ...expr, isEditing: false })),
    scopeExpanded,
    breakPointsExpanded,
    watchExpanded,
    focus: 0,
    editingValue: '',
    inputSource: 0,
  }
}
