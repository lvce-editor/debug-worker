import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { acceptWatchExpressionEdit } from '../AcceptWatchExpressionEdit/AcceptWatchExpressionEdit.ts'

export const handleInputBlur = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { watchExpressions } = state
  const editingIndex = watchExpressions.findIndex((expr) => expr.isEditing)

  if (editingIndex === -1) {
    return state
  }

  return acceptWatchExpressionEdit(state)
}
