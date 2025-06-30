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
        setSize: 1,
        posInset: 1,
      },
    ]
  }

  const topLevelCount = 4
  const watchRows = getRunAndDebugVisibleRowsWatch(state, topLevelCount, 0)
  const breakPointsRows = getRunAndDebugVisibleRowsBreakPoints(state, topLevelCount, 1)
  const scopeRows = getRunAndDebugVisibleRowsScope(state, watchRows.length + breakPointsRows.length, topLevelCount, 2)
  const callStackRows = getRunAndDebugVisibleRowsCallStack(state, watchRows.length + breakPointsRows.length + scopeRows.length, topLevelCount, 3)

  return [...watchRows, ...breakPointsRows, ...scopeRows, ...callStackRows]
}
