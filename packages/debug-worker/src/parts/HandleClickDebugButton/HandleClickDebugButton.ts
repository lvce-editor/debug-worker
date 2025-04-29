import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { pause, resume, stepInto, stepOut, stepOver } from '../HandlePaused/HandlePaused.ts'
import * as InputName from '../InputName/InputName.ts'

export const handleClickDebugButton = async (state: RunAndDebugState, inputName: string): Promise<RunAndDebugState> => {
  switch (inputName) {
    case InputName.DebugPause:
      return pause(state)
    case InputName.DebugResume:
      return resume(state)
    case InputName.DebugStepInto:
      return stepInto(state)
    case InputName.DebugStepOver:
      return stepOver(state)
    case InputName.DebugStepOut:
      return stepOut(state)
    case InputName.DebugStop:
      return state
    default:
      return state
  }
}
