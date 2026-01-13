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
  const { expanded, index, name, posInset, setSize, text } = row
  const isSelected = rowIndex === selectedIndex
  const className = getDebugRowClassName(ClassNames.DebugRow, isSelected)
  return [
    {
      ariaLevel: 2,
      ariaPosInSet: posInset,
      ariaSetSize: setSize,
      childCount: 2,
      className,
      'data-index': index,
      role: AriaRoles.TreeItem,
      type: VirtualDomElements.Div,
    },
    {
      checked: expanded,
      childCount: 0,
      id: name,
      inputType: InputType.CheckBox,
      name,
      onChange: DomEventListenerFunctions.HandleClickCheckBox,
      type: VirtualDomElements.Input,
    },
    {
      childCount: 1,
      className: ClassNames.InputLabel,
      htmlFor: name,
      type: VirtualDomElements.Label,
    },
    VirtualDomHelpers.text(text),
  ]
}
