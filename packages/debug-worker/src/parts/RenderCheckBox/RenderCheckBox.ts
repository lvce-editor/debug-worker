import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as AriaRoles from '../AriaRoles/AriaRoles.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as InputType from '../InputType/InputType.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const renderCheckBox = (row: DebugRow): readonly VirtualDomNode[] => {
  const { text, expanded, name } = row
  return [
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.DebugRow, ClassNames.DebugRowCheckBox),
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
