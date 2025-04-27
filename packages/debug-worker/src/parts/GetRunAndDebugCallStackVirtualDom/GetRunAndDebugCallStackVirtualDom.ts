import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as ViewletRunAndDebugStrings from '../DebugStrings/DebugStrings.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetChevronVirtualDom from '../GetChevronVirtualDom/GetChevronVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const debugRow1 = {
  type: VirtualDomElements.Div,
  className: ClassNames.DebugRow + ' DebugRowCallStack',
  childCount: 1,
}

const debugPausedMessage = {
  type: VirtualDomElements.Div,
  className: ClassNames.DebugPausedMessage,
  childCount: 1,
}
const textNotPaused = text(ViewletRunAndDebugStrings.notPaused())

const headerCallStack = {
  type: VirtualDomElements.Div,
  className: ClassNames.DebugSectionHeader,
  ariaExpanded: false,
  childCount: 2,
  onPointerDown: DomEventListenerFunctions.HandleClickSectionCallstack,
}
const headerCallStackExpanded = {
  type: VirtualDomElements.Div,
  className: ClassNames.DebugSectionHeader,
  ariaExpanded: true,
  childCount: 2,
  onPointerDown: DomEventListenerFunctions.HandleClickSectionCallstack,
}
const textCallStack = text(ViewletRunAndDebugStrings.callStack())

export const getRunAndDebugCallStackVirtualDom = (state: any): readonly VirtualDomNode[] => {
  const { callStack, callStackExpanded } = state
  const elements = []
  if (callStackExpanded) {
    elements.push(headerCallStackExpanded, GetChevronVirtualDom.getChevronDownVirtualDom(), textCallStack)
    if (callStack.length === 0) {
      elements.push(debugPausedMessage, textNotPaused)
    } else {
      for (const item of callStack) {
        elements.push(debugRow1, text(item.functionName))
      }
    }
  } else {
    elements.push(headerCallStack, GetChevronVirtualDom.getChevronRightVirtualDom(), textCallStack)
  }
  return elements
}
