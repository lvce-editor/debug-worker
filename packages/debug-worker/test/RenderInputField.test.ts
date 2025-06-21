import { test, expect } from '@jest/globals'
import type { DebugRow } from '../src/parts/DebugRow/DebugRow.ts'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as InputType from '../src/parts/InputType/InputType.ts'
import { renderInputField } from '../src/parts/RenderInputField/RenderInputField.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('renderInputField', () => {
  const row: DebugRow = {
    type: DebugRowType.InputField,
    text: 'test input',
    expanded: false,
    key: '',
    value: '',
    indent: 0,
    valueType: '',
    name: 'test-input',
    description: '',
  }
  const result = renderInputField(row, -1, 0)
  expect(result).toEqual([
    {
      type: VirtualDomElements.Div,
      className: `${ClassNames.DebugRow} ${ClassNames.DebugRowInputField}`,
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
      name: 'test-input',
      value: 'test input',
      childCount: 0,
      onInput: DomEventListenerFunctions.HandleInputFieldChange,
      onBlur: DomEventListenerFunctions.HandleInputBlur,
      id: 'test-input',
    },
  ])
})
