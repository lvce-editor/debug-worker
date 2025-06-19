import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import { getRunAndDebugVisibleRowsBreakPoints } from '../GetRunAndDebugVisibleRowsBreakPoints/GetRunAndDebugVisibleRowsBreakPoints.ts'
import { getRunAndDebugVisibleRowsCallStack } from '../GetRunAndDebugVisibleRowsCallStack/GetRunAndDebugVisibleRowsCallStack.ts'
import { getRunAndDebugVisibleRowsScope } from '../GetRunAndDebugVisibleRowsScope/GetRunAndDebugVisibleRowsScope.ts'
import { getRunAndDebugVisibleRowsWatch } from '../GetRunAndDebugVisibleRowsWatch/GetRunAndDebugVisibleRowsWatch.ts'

export const getRunAndDebugVisibleRows = (state: RunAndDebugState): readonly DebugRow[] => {
  return [
    ...getRunAndDebugVisibleRowsWatch(state),
    ...getRunAndDebugVisibleRowsBreakPoints(state),
    ...getRunAndDebugVisibleRowsScope(state),
    ...getRunAndDebugVisibleRowsCallStack(state),
  ]
}
