import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'
import * as ExceptionBreakPoints from '../ExceptionBreakPoints/ExceptionBreakPoints.ts'
import { getScopeRenderer } from '../GetScopeRenderer/GetScopeRenderer.ts'
import * as GetVisibleScopeItems from '../GetVisibleScopeItems/GetVisibleScopeItems.ts'
import * as InputName from '../InputName/InputName.ts'

const getRunAndDebugVisibleRowsWatch = (state: RunAndDebugState): readonly DebugRow[] => {
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

const getRunAndDebugVisibleRowsBreakPoints = (state: RunAndDebugState): readonly DebugRow[] => {
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

const getRunAndDebugVisibleRowsScope = (state: RunAndDebugState): readonly DebugRow[] => {
  const rows: DebugRow[] = []
  const { scopeChain, scopeExpanded, expandedIds, scopeFocusedIndex } = state
  if (scopeExpanded) {
    rows.push({
      type: DebugRowType.SectionHeading,
      text: DebugStrings.scope(),
      expanded: true,
      key: '',
      value: '',
      indent: 0,
      valueType: '',
      name: '',
    })
    if (scopeChain.length === 0) {
      rows.push({
        type: DebugRowType.Message,
        text: DebugStrings.notPaused(),
        expanded: false,
        key: '',
        value: '',
        indent: 0,
        valueType: '',
        name: '',
      })
    } else {
      const visible = GetVisibleScopeItems.getVisibleScopeItems(scopeChain, expandedIds, scopeFocusedIndex)
      for (const scope of visible) {
        const renderer = getScopeRenderer(scope.type)
        rows.push(...renderer(scope))
      }
    }
  } else {
    rows.push({
      type: DebugRowType.SectionHeading,
      text: DebugStrings.scope(),
      expanded: false,
      key: '',
      value: '',
      indent: 0,
      valueType: '',
      name: '',
    })
  }
  return rows
}

const getRunAndDebugVisibleRowsCallStack = (state: RunAndDebugState): readonly DebugRow[] => {
  const { callStack, callStackExpanded } = state
  const rows: DebugRow[] = []
  if (callStackExpanded) {
    rows.push({
      type: DebugRowType.SectionHeading,
      text: DebugStrings.callStack(),
      expanded: true,
      key: '',
      value: '',
      indent: 0,
      valueType: '',
      name: '',
    })
    if (callStack.length === 0) {
      rows.push({
        type: DebugRowType.Message,
        text: DebugStrings.notPaused(),
        expanded: false,
        key: '',
        value: '',
        indent: 0,
        valueType: '',
        name: '',
      })
    } else {
      for (const item of callStack) {
        rows.push({
          type: DebugRowType.CallStack,
          text: item.functionName,
          expanded: false,
          key: '',
          value: '',
          indent: 0,
          valueType: '',
          name: '',
        })
      }
    }
  } else {
    rows.push({
      type: DebugRowType.SectionHeading,
      text: DebugStrings.callStack(),
      expanded: false,
      key: '',
      value: '',
      indent: 0,
      valueType: '',
      name: '',
    })
  }
  return rows
}

export const getRunAndDebugVisibleRows = (state: RunAndDebugState): readonly DebugRow[] => {
  const rows = [
    ...getRunAndDebugVisibleRowsWatch(state),
    ...getRunAndDebugVisibleRowsBreakPoints(state),
    ...getRunAndDebugVisibleRowsScope(state),
    ...getRunAndDebugVisibleRowsCallStack(state),
  ]
  return rows
}
