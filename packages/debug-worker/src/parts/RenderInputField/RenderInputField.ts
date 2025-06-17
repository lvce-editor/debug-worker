import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as InputType from '../InputType/InputType.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const renderInputField = (row: DebugRow): readonly VirtualDomNode[] => {
  const { text, name } = row
  return [
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.DebugRow, ClassNames.DebugRowInputField),
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
