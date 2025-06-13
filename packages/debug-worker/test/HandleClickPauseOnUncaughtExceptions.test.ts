import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as ExceptionBreakPoints from '../src/parts/ExceptionBreakPoints/ExceptionBreakPoints.ts'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'
import { handleClickPauseOnUncaughtExceptions } from '../src/parts/HandleClickPauseOnUncaughtExceptions/HandleClickPauseOnUncaughtExceptions.ts'
import * as RendererWorker from '../src/parts/RendererWorker/RendererWorker.ts'

const setupRendererAndExtensionHost = async (): Promise<void> => {
  const mockRendererWorker = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve(undefined)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRendererWorker)

  const mockExtensionHost = await MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostDebug.setPauseOnExceptions') {
        return Promise.resolve()
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHost.set(mockExtensionHost)
}

test('handleClickPauseOnUncaughtExceptions - from None to Uncaught', async () => {
  await setupRendererAndExtensionHost()
  const state = createDefaultState()
  const result = await handleClickPauseOnUncaughtExceptions(state)
  expect(result.exceptionBreakPoints).toBe(ExceptionBreakPoints.Uncaught)
})

test('handleClickPauseOnUncaughtExceptions - from Uncaught to None', async () => {
  await setupRendererAndExtensionHost()
  const state = {
    ...createDefaultState(),
    exceptionBreakPoints: ExceptionBreakPoints.Uncaught,
  }
  const result = await handleClickPauseOnUncaughtExceptions(state)
  expect(result.exceptionBreakPoints).toBe(ExceptionBreakPoints.None)
})

test('handleClickPauseOnUncaughtExceptions - from All to None', async () => {
  await setupRendererAndExtensionHost()
  const state = {
    ...createDefaultState(),
    exceptionBreakPoints: ExceptionBreakPoints.All,
  }
  const result = await handleClickPauseOnUncaughtExceptions(state)
  expect(result.exceptionBreakPoints).toBe(ExceptionBreakPoints.None)
})
