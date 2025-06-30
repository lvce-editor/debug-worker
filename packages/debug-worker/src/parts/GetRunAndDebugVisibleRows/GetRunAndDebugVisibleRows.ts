import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'
import { getRunAndDebugVisibleRowsBreakPoints } from '../GetRunAndDebugVisibleRowsBreakPoints/GetRunAndDebugVisibleRowsBreakPoints.ts'
import { getRunAndDebugVisibleRowsCallStack } from '../GetRunAndDebugVisibleRowsCallStack/GetRunAndDebugVisibleRowsCallStack.ts'
import { getRunAndDebugVisibleRowsScope } from '../GetRunAndDebugVisibleRowsScope/GetRunAndDebugVisibleRowsScope.ts'
import { getRunAndDebugVisibleRowsWatch } from '../GetRunAndDebugVisibleRowsWatch/GetRunAndDebugVisibleRowsWatch.ts'

export const getRunAndDebugVisibleRows = (state: RunAndDebugState): readonly DebugRow[] => {
  if (state.debugState === DebugState.Unavailable) {
    return [
      {
        type: DebugRowType.Message,
        text: DebugStrings.noScriptRunning(),
        expanded: false,
        key: 'no-script-running',
        value: '',
        indent: 0,
        valueType: '',
        name: '',
        description: '',
        index: 0,
      },
    ]
  }

  const watchRows = getRunAndDebugVisibleRowsWatch(state)
  const breakPointsRows = getRunAndDebugVisibleRowsBreakPoints(state)
  const scopeRows = getRunAndDebugVisibleRowsScope(state, watchRows.length + breakPointsRows.length)
  const callStackRows = getRunAndDebugVisibleRowsCallStack(state, watchRows.length + breakPointsRows.length + scopeRows.length)

  return [...watchRows, ...breakPointsRows, ...scopeRows, ...callStackRows]
}
