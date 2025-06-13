import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as Debug from '../Debug/Debug.ts'

export const handleDebugInput = (state: RunAndDebugState, value: any): RunAndDebugState => {
  return {
    ...state,
    debugInputValue: value,
  }
}

export const handleEvaluate = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { debugInputValue, callFrameId, debugId } = state
  const result = await Debug.evaluate(debugId, debugInputValue, callFrameId)
  const actualResult = result.result.result.value
  return {
    ...state,
    debugInputValue: '',
    debugOutputValue: `${actualResult}`,
  }
}
