import type { DebugRow } from '../DebugRow/DebugRow.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'

type Scope = {
  indent: number
  key: string
  value: string
  valueType: string
}

export const getScopeThisRows = (scope: Scope): readonly DebugRow[] => {
  const { indent, key, value, valueType } = scope
  return [
    {
      type: DebugRowType.Value,
      text: '',
      expanded: false,
      key,
      value,
      indent,
      valueType,
      name: '',
      description: '',
    },
  ]
}
