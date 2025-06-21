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
      title: ViewletRunAndDebugStrings.resume(),
      icon: MaskIcon.DebugContinue,
      fn: InputName.DebugResume,
    })
  } else {
    debugButtons.push({
      title: ViewletRunAndDebugStrings.pause(),
      icon: MaskIcon.DebugPause,
      fn: InputName.DebugPause,
    })
  }
  debugButtons.push(
    {
      title: ViewletRunAndDebugStrings.stepOver(),
      icon: MaskIcon.DebugStepOver,
      fn: InputName.DebugStepOver,
    },
    {
      title: ViewletRunAndDebugStrings.stepInto(),
      icon: MaskIcon.DebugStepInto,
      fn: InputName.DebugStepInto,
    },
    {
      title: ViewletRunAndDebugStrings.stepOut(),
      icon: MaskIcon.DebugStepOut,
      fn: InputName.DebugStepOut,
    },
    {
      title: ViewletRunAndDebugStrings.restart(),
      icon: MaskIcon.DebugRestart,
      fn: InputName.DebugRestart,
    },
    {
      title: ViewletRunAndDebugStrings.stop(),
      icon: MaskIcon.DebugStop,
      fn: InputName.DebugStop,
    },
  )
  return debugButtons
}
