import { test, expect } from '@jest/globals'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as InputType from '../src/parts/InputType/InputType.ts'
import { renderInputField } from '../src/parts/RenderInputField/RenderInputField.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('renderInputField', () => {
  const row = {
    type: 11,
    text: 'test input',
    expanded: false,
    key: '',
    value: '',
    indent: 0,
    valueType: '',
    name: 'test-input',
    description: '',
  }
  const result = renderInputField(row)
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
      name: 'test-input',
      value: 'test input',
      childCount: 0,
      onChange: DomEventListenerFunctions.HandleInputFieldChange,
      id: 'test-input',
    },
  ])
})
