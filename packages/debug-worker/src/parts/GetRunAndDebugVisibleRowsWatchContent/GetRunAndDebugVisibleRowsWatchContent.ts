import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'
import * as InputName from '../InputName/InputName.ts'

const formatValue = (value: any): string => {
  return value === null || value === undefined ? '' : String(value)
}

const renderWatchExpression = (expression: string, value: any, isEditing: boolean, index: number): DebugRow => {
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
      index,
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
    index,
  }
}

export const getRunAndDebugVisibleRowsWatchContent = (watchExpressions: readonly WatchExpression[]): readonly DebugRow[] => {
  const rows: DebugRow[] = []

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
      // TODO simplify index
      const index = watchExpressions.indexOf(watchExpression)
      rows.push(renderWatchExpression(watchExpression.expression, watchExpression.value, watchExpression.isEditing || false, index))
    }
  }

  return rows
}
