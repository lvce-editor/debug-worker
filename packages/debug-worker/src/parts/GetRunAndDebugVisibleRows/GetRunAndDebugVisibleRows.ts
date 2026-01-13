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
        description: '',
        expanded: false,
        indent: 0,
        index: 0,
        key: 'no-script-running',
        name: '',
        posInset: 1,
        setSize: 1,
        text: DebugStrings.noScriptRunning(),
        type: DebugRowType.Message,
        value: '',
        valueType: '',
      },
    ]
  }

  const { topLevelCount } = state
  const watchRows = getRunAndDebugVisibleRowsWatch(state, 0, topLevelCount, 0)
  const breakPointsRows = getRunAndDebugVisibleRowsBreakPoints(state, watchRows.length, topLevelCount, 1)
  const scopeRows = getRunAndDebugVisibleRowsScope(state, watchRows.length + breakPointsRows.length, topLevelCount, 2)
  const callStackRows = getRunAndDebugVisibleRowsCallStack(state, watchRows.length + breakPointsRows.length + scopeRows.length, topLevelCount, 3)

  return [...watchRows, ...breakPointsRows, ...scopeRows, ...callStackRows]
}
