import { test, expect } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as ExceptionBreakPoints from '../src/parts/ExceptionBreakPoints/ExceptionBreakPoints.ts'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'
import { handleClickPauseOnExceptions } from '../src/parts/HandleClickPauseOnExceptions/HandleClickPauseOnExceptions.ts'
import { RendererWorker } from '@lvce-editor/rpc-registry'

test('handleClickPauseOnExceptions toggles from None to All', async () => {
  const mockRendererWorker = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Debugger.setPauseOnExceptions') {
        return
      }
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRendererWorker)

  const mockExtensionHost = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      return
    },
  })
  ExtensionHost.set(mockExtensionHost)

  const state: RunAndDebugState = createDefaultState()
  const newState = await handleClickPauseOnExceptions(state)
  expect(newState.exceptionBreakPoints).toBe(ExceptionBreakPoints.All)
})

test('handleClickPauseOnExceptions toggles from Uncaught to All', async () => {
  const mockRendererWorker = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Debugger.setPauseOnExceptions') {
        return
      }
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRendererWorker)

  const mockExtensionHost = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      return
    },
  })
  ExtensionHost.set(mockExtensionHost)

  const state = {
    ...createDefaultState(),
    exceptionBreakPoints: ExceptionBreakPoints.Uncaught,
  }
  const newState = await handleClickPauseOnExceptions(state)
  expect(newState.exceptionBreakPoints).toBe(ExceptionBreakPoints.All)
})

test('handleClickPauseOnExceptions toggles from All to None', async () => {
  const mockRendererWorker = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Debugger.setPauseOnExceptions') {
        return
      }
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRendererWorker)

  const mockExtensionHost = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      return
    },
  })
  ExtensionHost.set(mockExtensionHost)
  const state = {
    ...createDefaultState(),
    exceptionBreakPoints: ExceptionBreakPoints.All,
  }
  const newState = await handleClickPauseOnExceptions(state)
  expect(newState.exceptionBreakPoints).toBe(ExceptionBreakPoints.None)
})
