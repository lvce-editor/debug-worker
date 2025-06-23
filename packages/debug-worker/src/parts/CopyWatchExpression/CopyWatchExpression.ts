import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { copyTextToClipboard } from '../CopyTextToClipboard/CopyTextToClipboard.ts'

export const copyWatchExpression = async (state: RunAndDebugState, index: number): Promise<void> => {
  const { watchExpressions } = state

  if (index < 0 || index >= watchExpressions.length) {
    return
  }

  const watchExpression = watchExpressions[index]
  if (watchExpression) {
    await copyTextToClipboard(watchExpression.expression)
  }
}
