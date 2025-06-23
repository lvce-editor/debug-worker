import type { DebugRow } from '../DebugRow/DebugRow.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import { tokenizeValue } from '../TokenizeValue/TokenizeValue.ts'

type Scope = {
  key: string
  value: string
  indent: number
}

export const getScopeExceptionRows = (scope: Scope): readonly DebugRow[] => {
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
    },
  ]
}
