import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowName from '../DebugRowName/DebugRowName.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import * as DebugSectionId from '../DebugSectionId/DebugSectionId.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'
import * as ExceptionBreakPoints from '../ExceptionBreakPoints/ExceptionBreakPoints.ts'
import * as InputName from '../InputName/InputName.ts'

export const getRunAndDebugVisibleRowsBreakPoints = (state: RunAndDebugState, startIndex: number, topLevelCount: number, topLevelIndex: number): readonly DebugRow[] => {
  const { breakPointsExpanded, breakPointsVisible, exceptionBreakPoints } = state

  if (!breakPointsVisible) {
    return []
  }

  if (breakPointsExpanded) {
    const setSize = 2
    return [
      {
        description: '',
        expanded: true,
        indent: 0,
        index: startIndex,
        key: DebugSectionId.BreakPoints,
        name: DebugRowName.BreakPoints,
        posInset: topLevelIndex + 1,
        setSize: topLevelCount,
        text: DebugStrings.breakPoints(),
        type: DebugRowType.SectionHeading,
        value: '',
        valueType: '',
      },
      {
        description: '',
        expanded: exceptionBreakPoints === ExceptionBreakPoints.All,
        indent: 0,
        index: startIndex + 1,
        key: '',
        name: InputName.PauseOnExceptions,
        posInset: 2,
        setSize,
        text: DebugStrings.pauseOnExceptions(),
        type: DebugRowType.CheckBox,
        value: '',
        valueType: '',
      },
      {
        description: '',
        expanded: exceptionBreakPoints === ExceptionBreakPoints.Uncaught,
        indent: 0,
        index: startIndex + 2,
        key: '',
        name: InputName.PauseOnUncaughtExceptions,
        posInset: 3,
        setSize,
        text: DebugStrings.pauseOnUncaughtExceptions(),
        type: DebugRowType.CheckBox,
        value: '',
        valueType: '',
      },
    ]
  }
  return [
    {
      description: '',
      expanded: breakPointsExpanded,
      indent: 0,
      index: startIndex,
      key: DebugSectionId.BreakPoints,
      name: DebugRowName.BreakPoints,
      posInset: topLevelIndex + 1,
      setSize: topLevelCount,
      text: DebugStrings.breakPoints(),
      type: DebugRowType.SectionHeading,
      value: '',
      valueType: '',
    },
  ]
}
