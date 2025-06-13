import { test, expect } from '@jest/globals'
import { handleClickPauseOnExceptions } from '../src/parts/HandleClickPauseOnExceptions/HandleClickPauseOnExceptions.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as ExceptionBreakPoints from '../src/parts/ExceptionBreakPoints/ExceptionBreakPoints.ts'
import { MockRpc } from '@lvce-editor/rpc'
import * as RpcRegistry from '@lvce-editor/rpc-registry'
import { RpcId } from '@lvce-editor/rpc-registry'

test('handleClickPauseOnExceptions toggles from None to All', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Debugger.setPauseOnExceptions') {
        return Promise.resolve()
      }
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve()
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RpcRegistry.set(RpcId.RendererWorker, mockRpc)

  const state = createDefaultState()
  const newState = await handleClickPauseOnExceptions(state)
  expect(newState.exceptionBreakPoints).toBe(ExceptionBreakPoints.All)
})

test('handleClickPauseOnExceptions toggles from Uncaught to All', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Debugger.setPauseOnExceptions') {
        return Promise.resolve()
      }
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve()
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RpcRegistry.set(RpcId.RendererWorker, mockRpc)

  const state = {
    ...createDefaultState(),
    exceptionBreakPoints: ExceptionBreakPoints.Uncaught,
  }
  const newState = await handleClickPauseOnExceptions(state)
  expect(newState.exceptionBreakPoints).toBe(ExceptionBreakPoints.All)
})

test('handleClickPauseOnExceptions toggles from All to None', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'Debugger.setPauseOnExceptions') {
        return Promise.resolve()
      }
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve()
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RpcRegistry.set(RpcId.RendererWorker, mockRpc)

  const state = {
    ...createDefaultState(),
    exceptionBreakPoints: ExceptionBreakPoints.All,
  }
  const newState = await handleClickPauseOnExceptions(state)
  expect(newState.exceptionBreakPoints).toBe(ExceptionBreakPoints.None)
})
