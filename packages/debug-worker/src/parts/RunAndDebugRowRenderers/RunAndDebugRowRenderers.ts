import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as GetChevronVirtualDom from '../GetChevronVirtualDom/GetChevronVirtualDom.ts'
import * as GetDebugValueClassName from '../GetDebugValueClassName/GetDebugValueClassName.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import { separator } from '../Separator/Separator.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const renderNoop = (row: DebugRow): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      childCount: 1,
    },
    VirtualDomHelpers.text('unknown row type'),
  ]
}

export const renderMessage = (row: DebugRow): readonly VirtualDomNode[] => {
  const { text } = row
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DebugPausedMessage,
      childCount: 1,
    },
    VirtualDomHelpers.text(text),
  ]
}

export const renderCallStack = (row: DebugRow): readonly VirtualDomNode[] => {
  const { text, description } = row
  return [
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.DebugRow, 'DebugRowCallStack'),
      role: AriaRoles.TreeItem,
      ariaLevel: 2,
      childCount: 2,
    },
    VirtualDomHelpers.text(text),
    {
      type: VirtualDomElements.Div,
      className: ClassNames.CallStackDescription,
    },
    VirtualDomHelpers.text(description),
  ]
}

export const renderScope = (row: DebugRow): readonly VirtualDomNode[] => {
  const { key, expanded } = row
  const className = ClassNames.DebugRow
  return [
    {
      type: VirtualDomElements.Div,
      className,
      role: AriaRoles.TreeItem,
      ariaExpanded: expanded,
      ariaLevel: 2,
      childCount: 2,
      onPointerDown: DomEventListenerFunctions.HandleClickScopeValue,
    },
    expanded ? GetChevronVirtualDom.getChevronDownVirtualDom() : GetChevronVirtualDom.getChevronRightVirtualDom(),
    {
      type: VirtualDomElements.Span,
      className: MergeClassNames.mergeClassNames(ClassNames.DebugValue, 'DebugValueScopeName'),
      childCount: 1,
    },
    VirtualDomHelpers.text(key),
  ]
}

export const renderValue = (row: DebugRow): readonly VirtualDomNode[] => {
  const { indent, key, value, valueType, expanded } = row
  const className = GetDebugValueClassName.getDebugValueClassName(valueType)

  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.DebugRow,
      role: AriaRoles.TreeItem,
      ariaExpanded: expanded,
      ariaLevel: 3,
      paddingLeft: indent,
      onPointerDown: DomEventListenerFunctions.HandleClickScopeValue,
      childCount: 3,
    },
    {
      type: VirtualDomElements.Span,
      className: 'DebugValue DebugPropertyKey',
      childCount: 1,
    },
    VirtualDomHelpers.text(key),
    separator,
    {
      type: VirtualDomElements.Span,
      className: 'DebugValue ' + className,
      childCount: 1,
    },
    VirtualDomHelpers.text(value),
  ]
}
