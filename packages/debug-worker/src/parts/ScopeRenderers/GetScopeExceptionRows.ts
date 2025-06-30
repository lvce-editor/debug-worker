import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { Scope } from '../Scope/Scope.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import { tokenizeValue } from '../TokenizeValue/TokenizeValue.ts'

export const getScopeExceptionRows = (scope: Scope, relativeIndex: number, index: number): readonly DebugRow[] => {
  const { key, value, indent } = scope
  const tokens = tokenizeValue(value)
  return [
    {
      type: DebugRowType.Exception,
      text: '',
      tokens,
      expanded: false,
      key,
      value,
      indent,
      valueType: '',
      name: '',
      description: '',
      index: relativeIndex,
      setSize: 1,
      posInset: 1,
    },
  ]
}
