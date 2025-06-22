import { test, expect } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'
import { handleSpace } from '../src/parts/HandleSpace/HandleSpace.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'

test('handleSpace does nothing when no row is selected', async () => {
  const state = createDefaultState()
  const result = await handleSpace(state)
  expect(result).toBe(state)
})

test('handleSpace does nothing for non-checkbox rows', async () => {
  const mockRow = {
    type: DebugRowType.SectionHeading,
    text: 'test',
    expanded: false,
    key: 'test',
    value: '',
    indent: 0,
    valueType: '',
    name: '',
    description: '',
  }
  const state = { ...createDefaultState(), selectedIndex: 0, visibleRows: [mockRow] }
  const result = await handleSpace(state)
  expect(result).toBe(state)
})

test('handleSpace toggles checkbox rows', async () => {
  const mockRendererWorker = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return undefined
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRendererWorker)
  const mockExtensionHost = MockRpc.create({
    commandMap: {},
    invoke: () => undefined,
  })
  ExtensionHost.set(mockExtensionHost)

  const checkboxRow = {
    type: DebugRowType.CheckBox,
    text: 'Pause on Exceptions',
    expanded: false,
    key: '',
    value: '',
    indent: 0,
    valueType: '',
    name: InputName.PauseOnExceptions,
    description: '',
  }
  const state = { ...createDefaultState(), selectedIndex: 0, visibleRows: [checkboxRow] }
  const result = await handleSpace(state)
  expect(result).not.toBe(state)
  expect(result.exceptionBreakPoints).toBeDefined()
})
