import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { Scope } from '../Scope/Scope.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import { tokenizeValue } from '../TokenizeValue/TokenizeValue.ts'

export const getScopeThisRows = (scope: Scope, relativeIndex: number, index: number): readonly DebugRow[] => {
  const { indent, key, value, valueType } = scope
  const tokens = tokenizeValue(value)
  return [
    {
      type: DebugRowType.Value,
      text: '',
      tokens,
      expanded: false,
      key,
      value,
      indent,
      valueType,
      name: '',
      description: '',
      index,
      setSize: 1,
      posInset: 1,
      scopeChainIndex: relativeIndex,
    },
  ]
}
