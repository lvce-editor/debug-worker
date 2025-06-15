import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const acceptWatchExpressionEdit = (state: RunAndDebugState, editingValue: string): RunAndDebugState => {
  const { watchExpressions } = state
  const editingIndex = watchExpressions.findIndex((expr) => expr.isEditing)

  if (editingIndex === -1) {
    return state
  }

  if (editingValue === '') {
    return {
      ...state,
      watchExpressions: watchExpressions.toSpliced(editingIndex, 1),
      focus: 0,
    }
  }

  return {
    ...state,
    watchExpressions: watchExpressions.toSpliced(editingIndex, 1, {
      expression: editingValue,
      value: null,
      isEditing: false,
    }),
    focus: 0,
  }
}
