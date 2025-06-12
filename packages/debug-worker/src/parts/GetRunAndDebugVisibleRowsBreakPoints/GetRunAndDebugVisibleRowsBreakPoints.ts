import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import * as DebugSectionId from '../DebugSectionId/DebugSectionId.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'
import * as ExceptionBreakPoints from '../ExceptionBreakPoints/ExceptionBreakPoints.ts'
import * as InputName from '../InputName/InputName.ts'

export const getRunAndDebugVisibleRowsBreakPoints = (state: RunAndDebugState): readonly DebugRow[] => {
  const { breakPointsExpanded, exceptionBreakPoints } = state
  if (breakPointsExpanded) {
    return [
      {
        type: DebugRowType.SectionHeading,
        text: DebugStrings.breakPoints(),
        expanded: true,
        key: DebugSectionId.BreakPoints,
        value: '',
        indent: 0,
        valueType: '',
        name: '',
      },
      {
        type: DebugRowType.CheckBox,
        text: DebugStrings.pauseOnExceptions(),
        expanded: exceptionBreakPoints === ExceptionBreakPoints.All,
        key: '',
        value: '',
        indent: 0,
        valueType: '',
        name: InputName.PauseOnExceptions,
      },
      {
        type: DebugRowType.CheckBox,
        text: DebugStrings.pauseOnUncaughtExceptions(),
        expanded: exceptionBreakPoints === ExceptionBreakPoints.Uncaught,
        key: '',
        value: '',
        indent: 0,
        valueType: '',
        name: InputName.PauseOnUncaughtExceptions,
      },
    ]
  }
  return [
    {
      type: DebugRowType.SectionHeading,
      text: DebugStrings.breakPoints(),
      expanded: breakPointsExpanded,
      key: DebugSectionId.BreakPoints,
      value: '',
      indent: 0,
      valueType: '',
      name: '',
    },
  ]
}
