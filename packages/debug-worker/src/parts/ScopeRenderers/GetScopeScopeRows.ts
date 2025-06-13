import type { DebugRow } from '../DebugRow/DebugRow.ts'
import * as DebugItemFlags from '../DebugItemFlags/DebugItemFlags.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'

type Scope = {
  key: string
  flags: number
}

export const getScopeScopeRows = (scope: Scope): readonly DebugRow[] => {
  const { key, flags } = scope
  return [
    {
      type: DebugRowType.Scope,
      text: '',
      expanded: Boolean(flags & DebugItemFlags.Expanded),
      key,
      value: '',
      indent: 0,
      valueType: '',
      name: '',
      description: '',
    },
  ]
}
