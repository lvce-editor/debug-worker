import type { DebugButton } from '../DebugButton/DebugButton.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import * as ViewletRunAndDebugStrings from '../DebugStrings/DebugStrings.ts'
import * as InputName from '../InputName/InputName.ts'
import * as MaskIcon from '../MaskIcon/MaskIcon.ts'

export const getDebugButtons = (debugState: number): readonly DebugButton[] => {
  if (debugState === DebugState.Unavailable) {
    return []
  }

  const debugButtons: DebugButton[] = []
  if (debugState === DebugState.Paused) {
    debugButtons.push({
      fn: InputName.DebugResume,
      icon: MaskIcon.DebugContinue,
      title: ViewletRunAndDebugStrings.resume(),
    })
  } else {
    debugButtons.push({
      fn: InputName.DebugPause,
      icon: MaskIcon.DebugPause,
      title: ViewletRunAndDebugStrings.pause(),
    })
  }
  debugButtons.push(
    {
      fn: InputName.DebugStepOver,
      icon: MaskIcon.DebugStepOver,
      title: ViewletRunAndDebugStrings.stepOver(),
    },
    {
      fn: InputName.DebugStepInto,
      icon: MaskIcon.DebugStepInto,
      title: ViewletRunAndDebugStrings.stepInto(),
    },
    {
      fn: InputName.DebugStepOut,
      icon: MaskIcon.DebugStepOut,
      title: ViewletRunAndDebugStrings.stepOut(),
    },
    {
      fn: InputName.DebugRestart,
      icon: MaskIcon.DebugRestart,
      title: ViewletRunAndDebugStrings.restart(),
    },
    {
      fn: InputName.DebugStop,
      icon: MaskIcon.DebugStop,
      title: ViewletRunAndDebugStrings.stop(),
    },
  )
  return debugButtons
}
