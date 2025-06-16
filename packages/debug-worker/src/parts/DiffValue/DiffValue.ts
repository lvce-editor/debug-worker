import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as InputSource from '../InputSource/InputSource.ts'

export const isEqual = (oldState: RunAndDebugState, newState: RunAndDebugState): boolean => {
  if (newState.inputSource === InputSource.Script) {
    return newState.editingValue === oldState.editingValue
  }
  return true
}
