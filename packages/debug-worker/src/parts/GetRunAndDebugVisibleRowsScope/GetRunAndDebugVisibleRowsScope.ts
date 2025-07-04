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
      index: startingIndex,
      setSize: topLevelCount,
      posInset: topLevelIndex + 1,
    })
    if (debugState === DebugState.Paused) {
      const visible = GetVisibleScopeItems.getVisibleScopeItems(scopeChain, expandedIds, scopeFocusedIndex)
      // eslint-disable-next-line @typescript-eslint/prefer-for-of
      for (let i = 0; i < visible.length; i++) {
        const scope = visible[i]
        const renderer = getScopeRenderer(scope.type)
        const relativeIndex = visible.indexOf(scope)
        const absoluteIndex = startingIndex + relativeIndex + 1
        rows.push(...renderer(scope, relativeIndex, absoluteIndex))
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
        index: startingIndex + 1,
        setSize: 1,
        posInset: 1,
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
      index: startingIndex,
      setSize: topLevelCount,
      posInset: 1,
    })
  }
  return rows
}
