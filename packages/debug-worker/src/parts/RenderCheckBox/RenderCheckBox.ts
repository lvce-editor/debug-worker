import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getDebugRowClassName } from '../GetDebugRowClassName/GetDebugRowClassName.ts'
import * as InputType from '../InputType/InputType.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const renderCheckBox = (row: DebugRow, selectedIndex: number, rowIndex: number): readonly VirtualDomNode[] => {
  const { text, expanded, name } = row
  const isSelected = rowIndex === selectedIndex
  const className = getDebugRowClassName(ClassNames.DebugRow, isSelected)
  return [
    {
      type: VirtualDomElements.Div,
      className,
      role: AriaRoles.TreeItem,
      ariaLevel: 2,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Input,
      inputType: InputType.CheckBox,
      name,
      checked: expanded,
      childCount: 0,
      onChange: DomEventListenerFunctions.HandleClickCheckBox,
      id: name,
    },
    {
      type: VirtualDomElements.Label,
      className: ClassNames.InputLabel,
      htmlFor: name,
      childCount: 1,
    },
    VirtualDomHelpers.text(text),
  ]
}
