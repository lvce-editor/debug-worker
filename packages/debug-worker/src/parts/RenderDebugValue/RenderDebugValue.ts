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
  const { expanded, indent, index, key, tokens, value, valueType } = row
  const isSelected = rowIndex === selectedIndex
  const className = getDebugRowClassName(ClassNames.DebugRow, isSelected)

  const hasTokens = tokenColoringEnabled && tokens && tokens.length > 0
  let valueChildren: VirtualDomNode[]
  if (hasTokens) {
    valueChildren = []
    for (let i = 0; i < tokens.length; i += 2) {
      valueChildren.push({
        childCount: 1,
        children: [VirtualDomHelpers.text(tokens[i])],
        className: `DebugToken DebugToken${tokens[i + 1]}`,
        type: VirtualDomElements.Span,
      })
    }
  } else {
    valueChildren = [VirtualDomHelpers.text(value)]
  }

  return [
    {
      ariaExpanded: expanded,
      ariaLevel: 3,
      childCount: 3,
      className: className,
      'data-index': index,
      onPointerDown: DomEventListenerFunctions.HandleClickScopeValue,
      paddingLeft: indent,
      role: AriaRoles.TreeItem,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: 'DebugValue DebugPropertyKey',
      type: VirtualDomElements.Span,
    },
    VirtualDomHelpers.text(key),
    separator,
    {
      childCount: hasTokens ? valueChildren.length / 2 : 1,
      className: MergeClassNames.mergeClassNames(ClassNames.DebugValue, GetDebugValueClassName.getDebugValueClassName(valueType)),
      type: VirtualDomElements.Span,
    },
    ...valueChildren,
  ]
}
