import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { handleClickPauseOnExceptions } from '../HandleClickPauseOnExceptions/HandleClickPauseOnExceptions.ts'
import { handleClickPauseOnUncaughtExceptions } from '../HandleClickPauseOnUncaughtExceptions/HandleClickPauseOnUncaughtExceptions.ts'
import * as InputName from '../InputName/InputName.ts'

interface CheckBoxClickHandler {
  (state: RunAndDebugState): Promise<RunAndDebugState>
}

export const getCheckBoxClickHandler = (name: string): CheckBoxClickHandler => {
  switch (name) {
    case InputName.PauseOnExceptions:
      return handleClickPauseOnExceptions
    case InputName.PauseOnUncaughtExceptions:
      return handleClickPauseOnUncaughtExceptions
    default:
      throw new Error('unknown input name')
  }
}
