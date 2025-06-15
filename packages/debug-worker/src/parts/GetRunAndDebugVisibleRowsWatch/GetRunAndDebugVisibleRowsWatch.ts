import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowName from '../DebugRowName/DebugRowName.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import * as DebugSectionId from '../DebugSectionId/DebugSectionId.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'
import { getWatchActions } from '../GetWatchActions/GetWatchActions.ts'
import * as InputName from '../InputName/InputName.ts'

const formatValue = (value: any): string => {
  return value === null || value === undefined ? '' : String(value)
}

const renderWatchExpression = (expression: string, value: any, isEditing: boolean): DebugRow => {
  if (isEditing) {
    return {
      type: DebugRowType.InputField,
      text: '',
      expanded: false,
      key: 'new-watch-expression',
      value: '',
      indent: 0,
      valueType: '',
      name: InputName.WatchExpressionInput,
      description: '',
    }
  }
  return {
    type: DebugRowType.WatchExpression,
    text: expression,
    expanded: false,
    key: expression,
    value: formatValue(value),
    indent: 0,
    valueType: '',
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
      actions: getWatchActions(watchExpanded),
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
        rows.push(renderWatchExpression(watchExpression.expression, watchExpression.value, watchExpression.isEditing || false))
      }
    }
  }

  return rows
}
