import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowName from '../DebugRowName/DebugRowName.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import * as DebugSectionId from '../DebugSectionId/DebugSectionId.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'
import { getScopeRenderer } from '../GetScopeRenderer/GetScopeRenderer.ts'
import * as GetVisibleScopeItems from '../GetVisibleScopeItems/GetVisibleScopeItems.ts'

export const getRunAndDebugVisibleRowsScope = (state: RunAndDebugState): readonly DebugRow[] => {
  const { scopeChain, scopeExpanded, expandedIds, scopeFocusedIndex, scopeVisible, debugState } = state
  if (!scopeVisible) {
    return []
  }
  const rows: DebugRow[] = []
  if (scopeExpanded) {
    rows.push({
      type: DebugRowType.SectionHeading,
      text: DebugStrings.scope(),
      expanded: true,
      key: DebugSectionId.Scope,
      value: '',
      indent: 0,
      valueType: '',
      name: DebugRowName.Scope,
      description: '',
    })
    if (debugState === DebugState.Paused) {
      const visible = GetVisibleScopeItems.getVisibleScopeItems(scopeChain, expandedIds, scopeFocusedIndex)
      for (const scope of visible) {
        const renderer = getScopeRenderer(scope.type)
        rows.push(...renderer(scope))
      }
    } else {
      rows.push({
        type: DebugRowType.Message,
        text: DebugStrings.notPaused(),
        expanded: false,
        key: '',
        value: '',
        indent: 0,
        valueType: '',
        name: '',
        description: '',
      })
    }
  } else {
    rows.push({
      type: DebugRowType.SectionHeading,
      text: DebugStrings.scope(),
      expanded: false,
      key: DebugSectionId.Scope,
      value: '',
      indent: 0,
      valueType: '',
      name: DebugRowName.Scope,
      description: '',
    })
  }
  return rows
}
