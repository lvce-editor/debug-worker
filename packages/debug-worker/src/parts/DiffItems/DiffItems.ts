import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'
import * as DiffType from '../DiffType/DiffType.ts'

export const diffType = DiffType.RenderItems

export const isEqual = (oldState: RunAndDebugState, newState: RunAndDebugState): boolean => {
  return (
    oldState.scopeChain === newState.scopeChain &&
    oldState.scopeExpanded === newState.scopeExpanded &&
    oldState.callFrameId === newState.callFrameId &&
    oldState.breakPointsExpanded === newState.breakPointsExpanded &&
    oldState.debugState === newState.debugState
  )
}
