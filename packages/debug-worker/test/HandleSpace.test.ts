import { test, expect } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'
import { handleSpace } from '../src/parts/HandleSpace/HandleSpace.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('handleSpace does nothing when no row is selected', async () => {
  const state: RunAndDebugState = createDefaultState()
  const result = await handleSpace(state)
  expect(result).toBe(state)
})

test('handleSpace does nothing for non-checkbox rows', async () => {
  const mockRow = {
    description: '',
    expanded: false,
    indent: 0,
    index: 0,
    key: 'test',
    name: '',
    text: 'test',
    type: DebugRowType.SectionHeading,
    value: '',
    valueType: '',
  }
  const state: RunAndDebugState = { ...createDefaultState(), selectedIndex: 0, visibleRows: [mockRow] }
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
    description: '',
    expanded: false,
    indent: 0,
    index: 0,
    key: '',
    name: InputName.PauseOnExceptions,
    text: 'Pause on Exceptions',
    type: DebugRowType.CheckBox,
    value: '',
    valueType: '',
  }
  const state: RunAndDebugState = { ...createDefaultState(), selectedIndex: 0, visibleRows: [checkboxRow] }
  const result = await handleSpace(state)
  expect(result).not.toBe(state)
  expect(result.exceptionBreakPoints).toBeDefined()
})
