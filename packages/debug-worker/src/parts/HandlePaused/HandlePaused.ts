import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as Debug from '../Debug/Debug.ts'
import * as DebugState from '../DebugState/DebugState.ts'

/**
 * @deprecated
 */
export const handlePaused = async (state: RunAndDebugState, params: any): Promise<RunAndDebugState> => {
  return state
}

// TODO maybe store scope chain elements as tree
// TODO when collapsing, store collapsed elements by parent id in cache
// TODO when expanding, retrieve items from cache by parent id first
// if they don't exist, query the actual items

export const resume = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { debugId } = state
  await Debug.resume(debugId)
  return state
}

export const pause = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { debugId } = state
  await Debug.pause(debugId)
  return state
}

export const togglePause = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { debugState } = state
  if (debugState === DebugState.Default) {
    return pause(state)
  }
  return resume(state)
}

export const stepOver = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { debugId } = state
  await Debug.stepOver(debugId)
  return state
}

export const stepInto = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { debugId } = state
  await Debug.stepInto(debugId)
  return state
}

export const stepOut = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  const { debugId } = state
  await Debug.stepOut(debugId)
  return state
}

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

export const handleArrowLeft = (state: RunAndDebugState): RunAndDebugState => {
  const { focusedIndex } = state
  if (focusedIndex === 2) {
    return {
      ...state,
      scopeExpanded: false,
    }
  }
  return state
}

export const handleArrowRight = (state: RunAndDebugState): RunAndDebugState => {
  const { focusedIndex } = state
  if (focusedIndex === 2) {
    return {
      ...state,
      scopeExpanded: true,
    }
  }
  return state
}

export const handleArrowUp = (state: RunAndDebugState): RunAndDebugState => {
  return state
}

export const handleArrowDown = (state: RunAndDebugState): RunAndDebugState => {
  return state
}

export const focusPrevious = (state: RunAndDebugState): RunAndDebugState => {
  return state
}

export const focusNext = (state: RunAndDebugState): RunAndDebugState => {
  return state
}

export const resize = (state: RunAndDebugState, dimensions: any): RunAndDebugState => {
  return { ...state, ...dimensions }
}

export { handleClickScopeValue } from '../HandleClickScopeValue/HandleClickScopeValue.ts'
