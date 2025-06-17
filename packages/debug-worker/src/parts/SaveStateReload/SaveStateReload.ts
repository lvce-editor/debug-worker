import type { SavedState } from '../SavedState/SavedState.ts'
import { saveStateHotReload } from '../SaveStateHotReload/SaveStateHotReload.ts'

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
