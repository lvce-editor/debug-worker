import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DiffType from '../DiffType/DiffType.ts'

export const diffType = DiffType.RenderItems

export const isEqual = (oldState: RunAndDebugState, newState: RunAndDebugState): boolean => {
  return (
    oldState.breakPointsExpanded === newState.breakPointsExpanded &&
    oldState.callFrameId === newState.callFrameId &&
    oldState.callStackExpanded === newState.callStackExpanded &&
    oldState.debugState === newState.debugState &&
    oldState.scopeChain === newState.scopeChain &&
    oldState.scopeExpanded === newState.scopeExpanded &&
    oldState.selectedIndex === newState.selectedIndex &&
    oldState.visibleRows === newState.visibleRows &&
    oldState.watchExpanded === newState.watchExpanded &&
    oldState.watchExpressions === newState.watchExpressions
  )
}
