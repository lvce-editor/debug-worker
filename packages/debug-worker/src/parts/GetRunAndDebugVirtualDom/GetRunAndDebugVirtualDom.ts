import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as GetRunAndDebugBreakPointsVirtualDom from '../GetRunAndDebugBreakPointsVirtualDom/GetRunAndDebugBreakPointsVirtualDom.ts'
import * as GetRunAndDebugCallStackVirtualDom from '../GetRunAndDebugCallStackVirtualDom/GetRunAndDebugCallStackVirtualDom.ts'
import * as GetRunAndDebugScopeVirtualDom from '../GetRunAndDebugScopeVirtualDom/GetRunAndDebugScopeVirtualDom.ts'
import * as GetRunAndDebugWatchVirtualDom from '../GetRunAndDebugWatchVirtualDom/GetRunAndDebugWatchVirtualDom.ts'
import * as GetVirtualDomChildCount from '../GetVirtualDomChildCount/GetVirtualDomChildCount.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getRunAndDebugVirtualDom = (state: any): readonly VirtualDomNode[] => {
  const dom = []
  dom.push({
    type: VirtualDomElements.Div,
    className: 'Viewlet RunAndDebug',
    tabIndex: 0,
    childCount: 0,
  })
  const rest = []
  rest.push(...GetRunAndDebugWatchVirtualDom.renderWatch(state))
  rest.push(...GetRunAndDebugBreakPointsVirtualDom.renderBreakPoints(state))
  rest.push(...GetRunAndDebugScopeVirtualDom.getRunAndDebugScopeVirtualDom(state))
  rest.push(...GetRunAndDebugCallStackVirtualDom.getRunAndDebugCallStackVirtualDom(state))
  const childCount = GetVirtualDomChildCount.getVirtualDomChildCount(rest)
  dom[0].childCount = childCount
  dom.push(...rest)
  return dom
}
