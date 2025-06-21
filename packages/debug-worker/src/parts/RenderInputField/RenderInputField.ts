import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { getDebugRowClassName } from '../GetDebugRowClassName/GetDebugRowClassName.ts'
import * as InputType from '../InputType/InputType.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const renderInputField = (row: DebugRow, selectedIndex: number, rowIndex: number): readonly VirtualDomNode[] => {
  const { text, name } = row
  const isSelected = rowIndex === selectedIndex
  const className = getDebugRowClassName(`${ClassNames.DebugRow} ${ClassNames.DebugRowInputField}`, isSelected)
  return [
    {
      type: VirtualDomElements.Div,
      className,
      role: AriaRoles.TreeItem,
      ariaLevel: 2,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Input,
      inputType: InputType.Text,
      spellcheck: false,
      autocapitalize: 'off',
      autocorrect: 'off',
      className: ClassNames.InputBox,
      name,
      value: text,
      childCount: 0,
      onInput: DomEventListenerFunctions.HandleInputFieldChange,
      onBlur: DomEventListenerFunctions.HandleInputBlur,
      id: name,
    },
  ]
}
