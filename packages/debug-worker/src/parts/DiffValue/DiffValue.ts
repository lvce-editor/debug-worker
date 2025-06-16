import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as InputSource from '../InputSource/InputSource.ts'

export const isEqual = (oldState: RunAndDebugState, newState: RunAndDebugState): boolean => {
  return newState.inputSource !== InputSource.Script && oldState.editingValue === newState.editingValue
}
