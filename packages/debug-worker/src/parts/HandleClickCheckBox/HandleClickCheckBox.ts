import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { handleClickPauseOnExceptions } from '../HandleClickPauseOnExceptions/HandleClickPauseOnExceptions.ts'
import { handleClickPauseOnUncaughtExceptions } from '../HandleClickPauseOnUncaughtExceptions/HandleClickPauseOnUncaughtExceptions.ts'
import * as InputName from '../InputName/InputName.ts'

export const handleClickCheckBox = (state: RunAndDebugState, name: string): Promise<RunAndDebugState> => {
  switch (name) {
    case InputName.PauseOnExceptions:
      return handleClickPauseOnExceptions(state)
    case InputName.PauseOnUncaughtExceptions:
      return handleClickPauseOnUncaughtExceptions(state)
    default:
      throw new Error('unknown input name')
  }
}
