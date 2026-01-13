import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { WatchExpression } from '../WatchExpression/WatchExpression.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'
import * as InputName from '../InputName/InputName.ts'

const formatValue = (value: any): string => {
  return value === null || value === undefined ? '' : String(value)
}

const renderWatchExpression = (expression: string, value: any, isEditing: boolean, relativeIndex: number, index: number, setSize: number): DebugRow => {
  if (isEditing) {
    return {
      description: '',
      expanded: false,
      indent: 0,
      index,
      key: 'new-watch-expression',
      name: InputName.WatchExpressionInput,
      posInset: relativeIndex + 1,
      setSize,
      text: '',
      type: DebugRowType.InputField,
      value: '',
      valueType: '',
    }
  }
  return {
    description: '',
    expanded: false,
    indent: 0,
    index,
    key: expression,
    name: '',
    posInset: relativeIndex + 1,
    setSize,
    text: expression,
    type: DebugRowType.WatchExpression,
    value: formatValue(value),
    valueType: '',
  }
}

export const getRunAndDebugVisibleRowsWatchContent = (watchExpressions: readonly WatchExpression[], startIndex: number): readonly DebugRow[] => {
  const rows: DebugRow[] = []

  if (watchExpressions.length === 0) {
    rows.push({
      description: '',
      expanded: false,
      indent: 0,
      index: startIndex + 1,
      key: '',
      name: '',
      posInset: 1,
      setSize: 1,
      text: DebugStrings.noWatchExpression(),
      type: DebugRowType.WatchMessage,
      value: '',
      valueType: '',
    })
  } else {
    const setSize = watchExpressions.length
    for (const watchExpression of watchExpressions) {
      // TODO simplify index
      const index = watchExpressions.indexOf(watchExpression)
      rows.push(renderWatchExpression(watchExpression.expression, watchExpression.value, watchExpression.isEditing || false, index, startIndex + index, setSize))
    }
  }

  return rows
}
