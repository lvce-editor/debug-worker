import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugItemFlags from '../DebugItemFlags/DebugItemFlags.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'
import * as ExceptionBreakPoints from '../ExceptionBreakPoints/ExceptionBreakPoints.ts'
import * as InputName from '../InputName/InputName.ts'

export const getRunAndDebugVisibleRowsWatch = (state: RunAndDebugState): readonly DebugRow[] => {
  const { watchExpanded } = state
  return [
    {
      type: DebugRowType.SectionHeading,
      text: DebugStrings.watch(),
      expanded: watchExpanded,
      key: '',
      value: '',
      indent: 0,
      valueType: '',
      name: '',
    },
  ]
}

export const getRunAndDebugVisibleRowsBreakPoints = (state: RunAndDebugState): readonly DebugRow[] => {
  const { breakPointsExpanded, exceptionBreakPoints } = state
  if (breakPointsExpanded) {
    return [
      {
        type: DebugRowType.SectionHeading,
        text: DebugStrings.breakPoints(),
        expanded: true,
        key: '',
        value: '',
        indent: 0,
        valueType: '',
        name: '',
      },
      {
        type: DebugRowType.CheckBox,
        text: DebugStrings.pauseOnExceptions(),
        expanded: exceptionBreakPoints === ExceptionBreakPoints.All,
        key: '',
        value: '',
        indent: 0,
        valueType: '',
        name: InputName.PauseOnExceptions,
      },
      {
        type: DebugRowType.CheckBox,
        text: DebugStrings.pauseOnUncaughtExceptions(),
        expanded: exceptionBreakPoints === ExceptionBreakPoints.Uncaught,
        key: '',
        value: '',
        indent: 0,
        valueType: '',
        name: InputName.PauseOnUncaughtExceptions,
      },
    ]
  }
  return [
    {
      type: DebugRowType.SectionHeading,
      text: DebugStrings.breakPoints(),
      expanded: breakPointsExpanded,
      key: '',
      value: '',
      indent: 0,
      valueType: '',
      name: '',
    },
  ]
}

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
