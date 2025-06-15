import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowName from '../DebugRowName/DebugRowName.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import * as DebugSectionId from '../DebugSectionId/DebugSectionId.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'

export const renderWatchExpression = (expression: string, value: unknown): DebugRow => {
  return {
    type: DebugRowType.WatchExpression,
    text: '',
    expanded: false,
    key: expression,
    value: value === null || value === undefined ? '' : String(value),
    indent: 1,
    valueType: value === null || value === undefined ? 'undefined' : typeof value,
    name: '',
    description: '',
  }
}

export const getRunAndDebugVisibleRowsWatch = (state: RunAndDebugState): readonly DebugRow[] => {
  const { watchExpanded, watchExpressions } = state
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
    },
  ]

  if (watchExpanded) {
    if (watchExpressions.length === 0) {
      rows.push({
        type: DebugRowType.WatchMessage,
        text: DebugStrings.noWatchExpression(),
        expanded: false,
        key: '',
        value: '',
        indent: 0,
        valueType: '',
        name: '',
        description: '',
      })
    } else {
      for (const watchExpression of watchExpressions) {
        rows.push(renderWatchExpression(watchExpression.expression, watchExpression.value))
      }
    }
  }

  return rows
}
