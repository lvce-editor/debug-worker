import type { SavedState } from '../SavedState/SavedState.ts'
import * as RunAndDebugStates from '../RunAndDebugStates/RunAndDebugStates.ts'
import { SaveStateReasonHotReload } from '../SaveStateReason/SaveStateReason.ts'

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

export const saveStateReload = (uid: number): SavedState => {
  const hotReloadState = saveStateHotReload(uid)
  return {
    ...hotReloadState,
    watchExpressions: hotReloadState.watchExpressions.map((expr) => ({
      ...expr,
      isEditing: false,
    })),
    focus: 0,
    editingValue: '',
    inputSource: 0,
  }
}

export const saveState = (uid: number, reason: number): SavedState => {
  if (reason === SaveStateReasonHotReload) {
    return saveStateHotReload(uid)
  }
  return saveStateReload(uid)
}
