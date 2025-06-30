import { test, expect } from '@jest/globals'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as InputType from '../src/parts/InputType/InputType.ts'
import { renderCheckBox } from '../src/parts/RenderCheckBox/RenderCheckBox.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('renderCheckBox', () => {
  const row = {
    type: 1,
    text: 'test',
    expanded: true,
    key: 'test-key',
    value: 'test-value',
    indent: 0,
    valueType: 'string',
    name: 'test-name',
    description: '',
    index: 0,
  }
  const result = renderCheckBox(row, -1, 0)
  expect(result).toHaveLength(4)
  expect(result[0]).toEqual({
    type: VirtualDomElements.Div,
    className: expect.any(String),
    role: AriaRoles.TreeItem,
    ariaLevel: 2,
    childCount: 2,
    'data-index': 0,
  })
  expect(result[1]).toEqual({
    type: VirtualDomElements.Input,
    inputType: InputType.CheckBox,
    name: 'test-name',
    checked: true,
    childCount: 0,
    onChange: DomEventListenerFunctions.HandleClickCheckBox,
    id: 'test-name',
  })
  expect(result[2]).toEqual({
    type: VirtualDomElements.Label,
    className: ClassNames.InputLabel,
    htmlFor: 'test-name',
    childCount: 1,
  })
  expect(result[3]).toEqual({
    type: 12,
    text: 'test',
    childCount: 0,
  })
})
