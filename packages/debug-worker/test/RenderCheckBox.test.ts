import { test, expect } from '@jest/globals'
import * as AriaRoles from '../src/parts/AriaRoles/AriaRoles.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as InputType from '../src/parts/InputType/InputType.ts'
import { renderCheckBox } from '../src/parts/RenderCheckBox/RenderCheckBox.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('renderCheckBox', () => {
  const row = {
    description: '',
    expanded: true,
    indent: 0,
    index: 0,
    key: 'test-key',
    name: 'test-name',
    text: 'test',
    type: 1,
    value: 'test-value',
    valueType: 'string',
  }
  const result = renderCheckBox(row, -1, 0)
  expect(result).toHaveLength(4)
  expect(result[0]).toEqual({
    ariaLevel: 2,
    childCount: 2,
    className: expect.any(String),
    'data-index': 0,
    role: AriaRoles.TreeItem,
    type: VirtualDomElements.Div,
  })
  expect(result[1]).toEqual({
    checked: true,
    childCount: 0,
    id: 'test-name',
    inputType: InputType.CheckBox,
    name: 'test-name',
    onChange: DomEventListenerFunctions.HandleClickCheckBox,
    type: VirtualDomElements.Input,
  })
  expect(result[2]).toEqual({
    childCount: 1,
    className: ClassNames.InputLabel,
    htmlFor: 'test-name',
    type: VirtualDomElements.Label,
  })
  expect(result[3]).toEqual({
    childCount: 0,
    text: 'test',
    type: 12,
  })
})
