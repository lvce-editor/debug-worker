import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { Scope } from '../Scope/Scope.ts'
import * as DebugItemFlags from '../DebugItemFlags/DebugItemFlags.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'

export const getScopeScopeRows = (scope: Scope, relativeIndex: number, index: number): readonly DebugRow[] => {
  const { flags, key } = scope
  return [
    {
      description: '',
      expanded: Boolean(flags & DebugItemFlags.Expanded),
      indent: 0,
      index,
      key,
      name: '',
      posInset: 1,
      scopeChainIndex: relativeIndex,
      setSize: 1,
      text: '',
      type: DebugRowType.Scope,
      value: '',
      valueType: '',
    },
  ]
}
