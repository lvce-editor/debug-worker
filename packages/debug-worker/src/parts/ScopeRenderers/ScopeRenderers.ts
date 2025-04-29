import type { DebugRow } from '../DebugRow/DebugRow.ts'
import * as DebugItemFlags from '../DebugItemFlags/DebugItemFlags.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'

export const getScopeThisRows = (scope: any): readonly DebugRow[] => {
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
    },
  ]
}

export const getScopeExceptionRows = (scope: any): readonly DebugRow[] => {
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

export const getScopeScopeRows = (scope: any): readonly DebugRow[] => {
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
    },
  ]
}

export const getScopePropertyRows = (scope: any): readonly DebugRow[] => {
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

export const getNoopRows = (): readonly DebugRow[] => {
  return []
}
