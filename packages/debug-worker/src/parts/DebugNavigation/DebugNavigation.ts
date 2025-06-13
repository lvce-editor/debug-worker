import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

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
