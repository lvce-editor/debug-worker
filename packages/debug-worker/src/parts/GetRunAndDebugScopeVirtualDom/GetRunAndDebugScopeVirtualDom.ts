import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DebugScopeChainType from '../DebugScopeChainType/DebugScopeChainType.ts'
import * as ViewletRunAndDebugStrings from '../DebugStrings/DebugStrings.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetChevronVirtualDom from '../GetChevronVirtualDom/GetChevronVirtualDom.ts'
import * as GetScopeExceptionVirtualDom from '../GetScopeExceptionVirtualDom/GetScopeExceptionVirtualDom.ts'
import * as GetScopePropertyVirtualDom from '../GetScopePropertyVirtualDom/GetScopePropertyVirtualDom.ts'
import * as GetScopeScopeVirtualDom from '../GetScopeScopeVirtualDom/GetScopeScopeVirtualDom.ts'
import * as GetScopeThisVirtualDom from '../GetScopeThisVirtualDom/GetScopeThisVirtualDom.ts'
import * as GetVisibleScopeItems from '../GetVisibleScopeItems/GetVisibleScopeItems.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const scopeHeader = {
  type: VirtualDomElements.Div,
  className: ClassNames.DebugSectionHeader,
  role: AriaRoles.TreeItem,
  ariaLevel: 1,
  ariaExpanded: false,
  tabIndex: 0,
  childCount: 2,
  onPointerDown: DomEventListenerFunctions.HandleClickSectionScope,
}

const scopeHeaderExpanded = {
  type: VirtualDomElements.Div,
  className: ClassNames.DebugSectionHeader,
  role: AriaRoles.TreeItem,
  ariaLevel: 1,
  ariaExpanded: true,
  childCount: 2,
  onPointerDown: DomEventListenerFunctions.HandleClickSectionScope,
}

const debugPausedMessage = {
  type: VirtualDomElements.Div,
  className: ClassNames.DebugPausedMessage,
  childCount: 1,
}
const textNotPaused = text(ViewletRunAndDebugStrings.notPaused())

const textScope = text(ViewletRunAndDebugStrings.scope())

const getNoopVirtualDom = (): readonly any[] => {
  return []
}

const getScopeRenderer = (type: number): any => {
  switch (type) {
    case DebugScopeChainType.This:
      return GetScopeThisVirtualDom.getScopeThisVirtualDom
    case DebugScopeChainType.Exception:
      return GetScopeExceptionVirtualDom.getScopeExceptionVirtualDom
    case DebugScopeChainType.Scope:
      return GetScopeScopeVirtualDom.getScopeScopeVirtualDom
    case DebugScopeChainType.Property:
      return GetScopePropertyVirtualDom.getScopePropertyVirtualDom
    default:
      return getNoopVirtualDom
  }
}

export const getRunAndDebugScopeVirtualDom = (state: any): readonly VirtualDomNode[] => {
  const { scopeChain, scopeExpanded, expandedIds, scopeFocusedIndex } = state
  const elements = []
  if (scopeExpanded) {
    elements.push(scopeHeaderExpanded, GetChevronVirtualDom.getChevronDownVirtualDom(), textScope)
    if (scopeChain.length === 0) {
      elements.push(debugPausedMessage, textNotPaused)
    } else {
      const visible = GetVisibleScopeItems.getVisibleScopeItems(scopeChain, expandedIds, scopeFocusedIndex)
      for (const scope of visible) {
        const renderer = getScopeRenderer(scope.type)
        elements.push(...renderer(scope))
      }
    }
  } else {
    elements.push(scopeHeader, GetChevronVirtualDom.getChevronRightVirtualDom(), textScope)
  }
  return elements
}
