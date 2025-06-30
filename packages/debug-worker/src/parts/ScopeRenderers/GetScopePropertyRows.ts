import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { Scope } from '../Scope/Scope.ts'
import * as DebugItemFlags from '../DebugItemFlags/DebugItemFlags.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import { tokenizeValue } from '../TokenizeValue/TokenizeValue.ts'

export const getScopePropertyRows = (scope: Scope, relativeIndex: number, index: number): readonly DebugRow[] => {
  const { indent, key, value, valueType, flags } = scope
  const tokens = tokenizeValue(value)
  return [
    {
      type: DebugRowType.Property,
      text: '',
      tokens,
      expanded: Boolean(flags & DebugItemFlags.Expanded),
      key,
      value,
      indent,
      valueType,
      name: '',
      description: '',
      index,
      setSize: 1,
      posInset: 1,
    },
  ]
}
