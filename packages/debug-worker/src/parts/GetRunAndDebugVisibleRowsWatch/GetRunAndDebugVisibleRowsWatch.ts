import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowName from '../DebugRowName/DebugRowName.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import * as DebugSectionId from '../DebugSectionId/DebugSectionId.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'
import { getRunAndDebugVisibleRowsWatchContent } from '../GetRunAndDebugVisibleRowsWatchContent/GetRunAndDebugVisibleRowsWatchContent.ts'
import { getWatchActions } from '../GetWatchActions/GetWatchActions.ts'

export const getRunAndDebugVisibleRowsWatch = (state: RunAndDebugState, startIndex: number, topLevelCount: number, topLevelIndex: number): readonly DebugRow[] => {
  const { watchExpanded, watchExpressions, watchVisible } = state

  if (!watchVisible) {
    return []
  }

  const rows: DebugRow[] = [
    {
      actions: getWatchActions(watchExpanded),
      description: '',
      expanded: watchExpanded,
      indent: 0,
      index: 0,
      key: DebugSectionId.Watch,
      name: DebugRowName.Watch,
      posInset: topLevelIndex + 1,
      setSize: topLevelCount,
      text: DebugStrings.watch(),
      type: DebugRowType.SectionHeading,
      value: '',
      valueType: '',
    },
  ]

  if (watchExpanded) {
    rows.push(...getRunAndDebugVisibleRowsWatchContent(watchExpressions, startIndex))
  }

  return rows
}
