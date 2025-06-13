import type { DebugRow } from '../DebugRow/DebugRow.ts'
import * as DebugItemFlags from '../DebugItemFlags/DebugItemFlags.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'

type Scope = {
  indent: number
  key: string
  value: string
  valueType: string
  flags: number
}

export const getScopePropertyRows = (scope: Scope): readonly DebugRow[] => {
  const { indent, key, value, valueType, flags } = scope
  return [
    {
      type: DebugRowType.Property,
      text: '',
      expanded: Boolean(flags & DebugItemFlags.Expanded),
      key,
      value,
      indent,
      valueType,
      name: '',
    },
  ]
}
