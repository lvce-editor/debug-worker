import { test, expect, beforeEach } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'
import { handleClickDebugButton } from '../src/parts/HandleClickDebugButton/HandleClickDebugButton.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'
import { RendererWorker } from '@lvce-editor/rpc-registry'

const called: string[] = []
const mockRpc = MockRpc.create({
  commandMap: {},
  invoke: (method: string) => {
    called.push(method)
    return undefined
  },
})

beforeEach(() => {
  called.length = 0
  RendererWorker.set(mockRpc)
  ExtensionHost.set(mockRpc)
})

test('pause button calls ExtensionHostDebug.pause', async () => {
  const state: RunAndDebugState = createDefaultState(1)
  await handleClickDebugButton(state, InputName.DebugPause)
  expect(called).toContain('ExtensionHostDebug.pause')
})

test('resume button calls ExtensionHostDebug.resume', async () => {
  const state: RunAndDebugState = createDefaultState(1)
  await handleClickDebugButton(state, InputName.DebugResume)
  expect(called).toContain('ExtensionHostDebug.resume')
})

test('stepInto button calls ExtensionHostDebug.stepInto', async () => {
  const state: RunAndDebugState = createDefaultState(1)
  await handleClickDebugButton(state, InputName.DebugStepInto)
  expect(called).toContain('ExtensionHostDebug.stepInto')
})

test('stepOut button calls ExtensionHostDebug.stepOut', async () => {
  const state: RunAndDebugState = createDefaultState(1)
  await handleClickDebugButton(state, InputName.DebugStepOut)
  expect(called).toContain('ExtensionHostDebug.stepOut')
})

test('stepOver button calls ExtensionHostDebug.stepOver', async () => {
  const state: RunAndDebugState = createDefaultState(1)
  await handleClickDebugButton(state, InputName.DebugStepOver)
  expect(called).toContain('ExtensionHostDebug.stepOver')
})

test('stop button does not throw', async () => {
  const state: RunAndDebugState = createDefaultState(1)
  await expect(handleClickDebugButton(state, InputName.DebugStop)).resolves.toBeDefined()
})

test('unknown button does not throw', async () => {
  const state: RunAndDebugState = createDefaultState(1)
  await expect(handleClickDebugButton(state, 'unknown')).resolves.toBeDefined()
})
