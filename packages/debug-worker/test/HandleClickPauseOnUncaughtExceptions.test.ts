import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as ExceptionBreakPoints from '../src/parts/ExceptionBreakPoints/ExceptionBreakPoints.ts'
import * as ExtensionHost from '../src/parts/ExtensionHost/ExtensionHost.ts'
import { handleClickPauseOnUncaughtExceptions } from '../src/parts/HandleClickPauseOnUncaughtExceptions/HandleClickPauseOnUncaughtExceptions.ts'
import { RendererWorker } from '@lvce-editor/rpc-registry'

const setupRendererAndExtensionHost = async (): Promise<void> => {
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
    invoke: (method: string) => {
      if (method === 'ExtensionHostDebug.setPauseOnExceptions') {
        return
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHost.set(mockExtensionHost)
}

test('handleClickPauseOnUncaughtExceptions - from None to Uncaught', async () => {
  await setupRendererAndExtensionHost()
  const state: RunAndDebugState = createDefaultState()
  const result = await handleClickPauseOnUncaughtExceptions(state)
  expect(result.exceptionBreakPoints).toBe(ExceptionBreakPoints.Uncaught)
})

test('handleClickPauseOnUncaughtExceptions - from Uncaught to None', async () => {
  await setupRendererAndExtensionHost()
  const state: RunAndDebugState = {
    ...createDefaultState(),
    exceptionBreakPoints: ExceptionBreakPoints.Uncaught,
  }
  const result = await handleClickPauseOnUncaughtExceptions(state)
  expect(result.exceptionBreakPoints).toBe(ExceptionBreakPoints.None)
})

test('handleClickPauseOnUncaughtExceptions - from All to None', async () => {
  await setupRendererAndExtensionHost()
  const state: RunAndDebugState = {
    ...createDefaultState(),
    exceptionBreakPoints: ExceptionBreakPoints.All,
  }
  const result = await handleClickPauseOnUncaughtExceptions(state)
  expect(result.exceptionBreakPoints).toBe(ExceptionBreakPoints.None)
})
