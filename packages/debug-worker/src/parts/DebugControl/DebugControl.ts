import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as Debug from '../Debug/Debug.ts'
import * as DebugState from '../DebugState/DebugState.ts'

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
