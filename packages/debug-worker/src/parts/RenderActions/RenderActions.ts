import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as DebugState from '../DebugState/DebugState.ts'
import * as GetRunAndDebugButtonsVirtualDom from '../GetRunAndDebugButtonsVirtualDom/GetRunAndDebugButtonsVirtualDom.ts'
import * as RunAndDebugStates from '../RunAndDebugStates/RunAndDebugStates.ts'

export const renderActions = (uid: number): readonly VirtualDomNode[] => {
  const { newState } = RunAndDebugStates.get(uid)
  const { debugState, scopeExpanded } = newState

  if (debugState === DebugState.Unavailable) {
    return []
  }

  if (scopeExpanded) {
    return GetRunAndDebugButtonsVirtualDom.getRunAndDebugButtonsVirtualDom(newState.debugState)
  }
  return GetRunAndDebugButtonsVirtualDom.getRunAndDebugButtonsVirtualDom(newState.debugState)
}
