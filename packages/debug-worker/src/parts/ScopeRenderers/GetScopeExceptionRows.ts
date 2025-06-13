import type { DebugRow } from '../DebugRow/DebugRow.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'

type Scope = {
  key: string
  value: string
  indent: number
}

export const getScopeExceptionRows = (scope: Scope): readonly DebugRow[] => {
  const { key, value, indent } = scope
  return [
    {
      type: DebugRowType.Exception,
      text: '',
      expanded: false,
      key,
      value,
      indent,
      valueType: '',
      name: '',
    },
  ]
}
