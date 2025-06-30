import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowName from '../DebugRowName/DebugRowName.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import * as DebugSectionId from '../DebugSectionId/DebugSectionId.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'
import { getRunAndDebugVisibleRowsWatchContent } from '../GetRunAndDebugVisibleRowsWatchContent/GetRunAndDebugVisibleRowsWatchContent.ts'
import { getWatchActions } from '../GetWatchActions/GetWatchActions.ts'

export const getRunAndDebugVisibleRowsWatch = (state: RunAndDebugState, topLevelCount: number): readonly DebugRow[] => {
  const { watchExpanded, watchExpressions, watchVisible } = state

  if (!watchVisible) {
    return []
  }

  const rows: DebugRow[] = [
    {
      type: DebugRowType.SectionHeading,
      text: DebugStrings.watch(),
      expanded: watchExpanded,
      key: DebugSectionId.Watch,
      value: '',
      indent: 0,
      valueType: '',
      name: DebugRowName.Watch,
      description: '',
      actions: getWatchActions(watchExpanded),
      index: 0,
      setSize: 1,
      posInset: 1,
    },
  ]

  if (watchExpanded) {
    rows.push(...getRunAndDebugVisibleRowsWatchContent(watchExpressions))
  }

  return rows
}
