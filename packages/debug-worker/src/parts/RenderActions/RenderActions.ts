import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as GetRunAndDebugButtonsVirtualDom from '../GetRunAndDebugButtonsVirtualDom/GetRunAndDebugButtonsVirtualDom.ts'
import * as RunAndDebugStates from '../RunAndDebugStates/RunAndDebugStates.ts'

export const renderActions = (uid: number): readonly VirtualDomNode[] => {
  const { newState } = RunAndDebugStates.get(uid)
  const { scopeExpanded } = newState
  if (scopeExpanded) {
    return GetRunAndDebugButtonsVirtualDom.getRunAndDebugButtonsVirtualDom(newState.debugState)
  }
  return GetRunAndDebugButtonsVirtualDom.getRunAndDebugButtonsVirtualDom(newState.debugState)
}
