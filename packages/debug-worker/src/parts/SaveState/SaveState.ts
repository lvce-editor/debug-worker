import type { SavedState } from '../SavedState/SavedState.ts'
import * as RunAndDebugStates from '../RunAndDebugStates/RunAndDebugStates.ts'
import { SaveStateReasonHotReload } from '../SaveStateReason/SaveStateReason.ts'

export const saveState = (uid: number, reason: number): SavedState => {
  const { newState } = RunAndDebugStates.get(uid)
  const { breakPointsExpanded, editingValue, focus, inputSource, scopeExpanded, watchExpanded, watchExpressions } = newState

  if (reason === SaveStateReasonHotReload) {
    return {
      breakPointsExpanded,
      editingValue,
      focus,
      inputSource,
      scopeExpanded,
      watchExpanded,
      watchExpressions,
    }
  }

  return {
    breakPointsExpanded,
    editingValue: '',
    focus: 0,
    inputSource: 0,
    scopeExpanded,
    watchExpanded,
    watchExpressions: watchExpressions.map((expr) => ({ ...expr, isEditing: false })),
  }
}
