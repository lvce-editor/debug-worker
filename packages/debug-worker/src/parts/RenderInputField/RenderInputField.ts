import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getDebugRowClassName } from '../GetDebugRowClassName/GetDebugRowClassName.ts'
import * as InputType from '../InputType/InputType.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const renderInputField = (row: DebugRow, selectedIndex: number, rowIndex: number): readonly VirtualDomNode[] => {
  const { name, text } = row
  const isSelected = rowIndex === selectedIndex
  const className = getDebugRowClassName(`${ClassNames.DebugRow} ${ClassNames.DebugRowInputField}`, isSelected)
  return [
    {
      ariaLevel: 2,
      childCount: 1,
      className,
      role: AriaRoles.TreeItem,
      type: VirtualDomElements.Div,
    },
    {
      autocapitalize: 'off',
      autocorrect: 'off',
      childCount: 0,
      className: ClassNames.InputBox,
      id: name,
      inputType: InputType.Text,
      name,
      onBlur: DomEventListenerFunctions.HandleInputBlur,
      onInput: DomEventListenerFunctions.HandleInputFieldChange,
      spellcheck: false,
      type: VirtualDomElements.Input,
      value: text,
    },
  ]
}
