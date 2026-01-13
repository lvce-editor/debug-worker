import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { pause, resume, stepInto, stepOut, stepOver } from '../HandlePaused/HandlePaused.ts'
import * as InputName from '../InputName/InputName.ts'

interface DebugButtonHandler {
  (state: RunAndDebugState): Promise<RunAndDebugState>
}

const stop = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  // TODO
  return state
}

const noop = async (state: RunAndDebugState): Promise<RunAndDebugState> => {
  // TODO
  return state
}

export const getDebugButtonHandler = (inputName: string): DebugButtonHandler => {
  switch (inputName) {
    case InputName.DebugPause:
      return pause
    case InputName.DebugResume:
      return resume
    case InputName.DebugStepInto:
      return stepInto
    case InputName.DebugStepOut:
      return stepOut
    case InputName.DebugStepOver:
      return stepOver
    case InputName.DebugStop:
      return stop
    default:
      return noop
  }
}
