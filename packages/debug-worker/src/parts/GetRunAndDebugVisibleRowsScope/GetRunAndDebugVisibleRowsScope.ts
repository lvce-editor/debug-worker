import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DebugRowName from '../DebugRowName/DebugRowName.ts'
import * as DebugRowType from '../DebugRowType/DebugRowType.ts'
import * as DebugSectionId from '../DebugSectionId/DebugSectionId.ts'
import * as DebugState from '../DebugState/DebugState.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'
import { getScopeRenderer } from '../GetScopeRenderer/GetScopeRenderer.ts'
import * as GetVisibleScopeItems from '../GetVisibleScopeItems/GetVisibleScopeItems.ts'

export const getRunAndDebugVisibleRowsScope = (state: RunAndDebugState, startingIndex: number, topLevelCount: number, topLevelIndex: number): readonly DebugRow[] => {
  const { debugState, expandedIds, scopeChain, scopeExpanded, scopeFocusedIndex, scopeVisible } = state
  if (!scopeVisible) {
    return []
  }
  const rows: DebugRow[] = []
  if (scopeExpanded) {
    rows.push({
      description: '',
      expanded: true,
      indent: 0,
      index: startingIndex,
      key: DebugSectionId.Scope,
      name: DebugRowName.Scope,
      posInset: topLevelIndex + 1,
      setSize: topLevelCount,
      text: DebugStrings.scope(),
      type: DebugRowType.SectionHeading,
      value: '',
      valueType: '',
    })
    if (debugState === DebugState.Paused) {
      const visible = GetVisibleScopeItems.getVisibleScopeItems(scopeChain, expandedIds, scopeFocusedIndex)

      for (let i = 0; i < visible.length; i++) {
        const scope = visible[i]
        const renderer = getScopeRenderer(scope.type)
        const relativeIndex = visible.indexOf(scope)
        const absoluteIndex = startingIndex + relativeIndex + 1
        rows.push(...renderer(scope, relativeIndex, absoluteIndex))
      }
    } else {
      rows.push({
        description: '',
        expanded: false,
        indent: 0,
        index: startingIndex + 1,
        key: '',
        name: '',
        posInset: 1,
        setSize: 1,
        text: DebugStrings.notPaused(),
        type: DebugRowType.Message,
        value: '',
        valueType: '',
      })
    }
  } else {
    rows.push({
      description: '',
      expanded: false,
      indent: 0,
      index: startingIndex,
      key: DebugSectionId.Scope,
      name: DebugRowName.Scope,
      posInset: 1,
      setSize: topLevelCount,
      text: DebugStrings.scope(),
      type: DebugRowType.SectionHeading,
      value: '',
      valueType: '',
    })
  }
  return rows
}
