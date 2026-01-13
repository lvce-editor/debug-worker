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
    description: '',
    expanded: false,
    indent: 0,
    index: 0,
    key: '',
    name: 'test-input',
    text: 'test input',
    type: DebugRowType.InputField,
    value: '',
    valueType: '',
  }
  const result = renderInputField(row, -1, 0)
  expect(result).toEqual([
    {
      ariaLevel: 2,
      childCount: 1,
      className: `${ClassNames.DebugRow} ${ClassNames.DebugRowInputField}`,
      role: AriaRoles.TreeItem,
      type: VirtualDomElements.Div,
    },
    {
      autocapitalize: 'off',
      autocorrect: 'off',
      childCount: 0,
      className: ClassNames.InputBox,
      id: 'test-input',
      inputType: InputType.Text,
      name: 'test-input',
      onBlur: DomEventListenerFunctions.HandleInputBlur,
      onInput: DomEventListenerFunctions.HandleInputFieldChange,
      spellcheck: false,
      type: VirtualDomElements.Input,
      value: 'test input',
    },
  ])
})
