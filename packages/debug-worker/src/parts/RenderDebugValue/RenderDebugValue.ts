import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getDebugRowClassName } from '../GetDebugRowClassName/GetDebugRowClassName.ts'
import * as GetDebugValueClassName from '../GetDebugValueClassName/GetDebugValueClassName.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import { separator } from '../Separator/Separator.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const renderValue = (row: DebugRow, selectedIndex: number, rowIndex: number, tokenColoringEnabled: boolean): readonly VirtualDomNode[] => {
  const { indent, key, value, valueType, expanded, tokens, index } = row
  const isSelected = rowIndex === selectedIndex
  const className = getDebugRowClassName(ClassNames.DebugRow, isSelected)

  const hasTokens = tokenColoringEnabled && tokens && tokens.length > 0
  let valueChildren: VirtualDomNode[]
  if (hasTokens) {
    valueChildren = []
    for (let i = 0; i < tokens.length; i += 2) {
      valueChildren.push({
        type: VirtualDomElements.Span,
        className: `DebugToken DebugToken${tokens[i + 1]}`,
        childCount: 1,
        children: [VirtualDomHelpers.text(tokens[i])],
      })
    }
  } else {
    valueChildren = [VirtualDomHelpers.text(value)]
  }

  return [
    {
      type: VirtualDomElements.Div,
      className: className,
      role: AriaRoles.TreeItem,
      ariaExpanded: expanded,
      ariaLevel: 3,
      paddingLeft: indent,
      onPointerDown: DomEventListenerFunctions.HandleClickScopeValue,
      childCount: 3,
      'data-index': index,
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
      className: MergeClassNames.mergeClassNames(ClassNames.DebugValue, GetDebugValueClassName.getDebugValueClassName(valueType)),
      childCount: hasTokens ? valueChildren.length / 2 : 1,
    },
    ...valueChildren,
  ]
}
