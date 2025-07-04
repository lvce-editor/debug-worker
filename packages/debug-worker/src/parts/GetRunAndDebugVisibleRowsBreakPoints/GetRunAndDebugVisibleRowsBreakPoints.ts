import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowName from '../DebugRowName/DebugRowName.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import * as DebugSectionId from '../DebugSectionId/DebugSectionId.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'
import * as ExceptionBreakPoints from '../ExceptionBreakPoints/ExceptionBreakPoints.ts'
import * as InputName from '../InputName/InputName.ts'

export const getRunAndDebugVisibleRowsBreakPoints = (state: RunAndDebugState, startIndex: number, topLevelCount: number, topLevelIndex: number): readonly DebugRow[] => {
  const { breakPointsExpanded, exceptionBreakPoints, breakPointsVisible } = state

  if (!breakPointsVisible) {
    return []
  }

  if (breakPointsExpanded) {
    const setSize = 2
    return [
      {
        type: DebugRowType.SectionHeading,
        text: DebugStrings.breakPoints(),
        expanded: true,
        key: DebugSectionId.BreakPoints,
        value: '',
        indent: 0,
        valueType: '',
        name: DebugRowName.BreakPoints,
        description: '',
        index: startIndex,
        setSize: topLevelCount,
        posInset: topLevelIndex + 1,
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
        description: '',
        index: startIndex + 1,
        setSize,
        posInset: 2,
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
        description: '',
        index: startIndex + 2,
        setSize,
        posInset: 3,
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
      name: DebugRowName.BreakPoints,
      description: '',
      index: startIndex,
      setSize: topLevelCount,
      posInset: topLevelIndex + 1,
    },
  ]
}
