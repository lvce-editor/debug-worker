import type { SavedState } from '../SavedState/SavedState.ts'
import { saveStateHotReload } from '../SaveStateHotReload/SaveStateHotReload.ts'
import { SaveStateReasonHotReload } from '../SaveStateReason/SaveStateReason.ts'
import { saveStateReload } from '../SaveStateReload/SaveStateReload.ts'

export const saveState = (uid: number, reason: number): SavedState => {
  if (reason === SaveStateReasonHotReload) {
    return saveStateHotReload(uid)
  }
  return saveStateReload(uid)
}
