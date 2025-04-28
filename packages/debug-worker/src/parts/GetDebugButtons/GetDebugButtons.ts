import type { DebugButton } from '../DebugButton/DebugButton.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import * as ViewletRunAndDebugStrings from '../DebugStrings/DebugStrings.ts'
import * as MaskIcon from '../MaskIcon/MaskIcon.ts'

export const getDebugButtons = (debugState: number): readonly DebugButton[] => {
  const debugButtons: DebugButton[] = []
  if (debugState === DebugState.Paused) {
    debugButtons.push({
      title: ViewletRunAndDebugStrings.resume(),
      icon: MaskIcon.DebugContinue,
      fn: 'resume',
    })
  } else {
    debugButtons.push({
      title: ViewletRunAndDebugStrings.pause(),
      icon: MaskIcon.DebugPause,
      fn: 'pause',
    })
  }
  debugButtons.push(
    {
      title: ViewletRunAndDebugStrings.stepOver(),
      icon: MaskIcon.DebugStepOver,
      fn: 'stepOver',
    },
    {
      title: ViewletRunAndDebugStrings.stepInto(),
      icon: MaskIcon.DebugStepInto,
      fn: 'stepInto',
    },
    {
      title: ViewletRunAndDebugStrings.stepOut(),
      icon: MaskIcon.DebugStepOut,
      fn: 'stepOut',
    },
    {
      title: ViewletRunAndDebugStrings.restart(),
      icon: MaskIcon.DebugRestart,
      fn: 'restart',
    },
    {
      title: ViewletRunAndDebugStrings.stop(),
      icon: MaskIcon.DebugStop,
      fn: 'stop',
    },
  )
  return debugButtons
}
