import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as Debug from '../Debug/Debug.ts'

export const loadContentLater = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { debugId } = state
  await Debug.start(debugId)
  return state
}
