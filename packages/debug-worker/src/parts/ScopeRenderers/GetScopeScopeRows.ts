import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { Scope } from '../Scope/Scope.ts'
import * as DebugItemFlags from '../DebugItemFlags/DebugItemFlags.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'

export const getScopeScopeRows = (scope: Scope, index: number): readonly DebugRow[] => {
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
      index,
    },
  ]
}
