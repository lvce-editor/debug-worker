import { test, expect } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RpcId } from '@lvce-editor/rpc-registry'
import * as RpcRegistry from '../src/parts/RpcRegistry/RpcRegistry.ts'
import { createScriptMap as realCreateScriptMap } from '../src/parts/CreateScriptMap/CreateScriptMap.ts'
import * as Debug from '../src/parts/Debug/Debug.ts'
import * as ExtensionHostDebug from '../src/parts/ExtensionHostDebug/ExtensionHostDebug.ts'
import * as GetCallStack from '../src/parts/GetCallStack/GetCallStack.ts'
import * as GetDebugPausedMessage from '../src/parts/GetDebugPausedMessage/GetDebugPausedMessage.ts'
import { getPausedInfo2 } from '../src/parts/GetPausedInfo2/GetPausedInfo2.ts'
import * as GetScopeChain from '../src/parts/GetScopeChain/GetScopeChain.ts'
import type { ParsedScriptMap } from '../src/parts/ParsedScriptMap/ParsedScriptMap.ts'

test('getPausedInfo2', async () => {
  const mockDebugId = 'test-debug-id'
  const mockCallFrames = [
    {
      callFrameId: 'frame1',
      scopeChain: [
        {
          object: {
            objectId: 'scope1',
          },
        },
      ],
      this: {},
    },
  ]
  const mockCallStack = ['stack1']
  const mockPausedStatus = {
    reason: 'test-reason',
    data: {},
  }
  const mockScripts: any[] = []
  const mockScriptMap: ParsedScriptMap = {}
  const mockProperties = ['prop1']

  // Register mock RPC for ExtensionHostDebug and Debug
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...params: any[]) => {
      if (method === 'ExtensionHostDebug.getCallStack') {
        return Promise.resolve(mockCallFrames)
      }
      if (method === 'ExtensionHostDebug.getPausedStatus') {
        return Promise.resolve(mockPausedStatus)
      }
      if (method === 'ExtensionHostDebug.getScripts') {
        return Promise.resolve(mockScripts)
      }
      if (method === 'ExtensionHostDebug.getProperties') {
        return Promise.resolve(mockProperties)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RpcRegistry.set(RpcId.ExtensionHostWorker, mockRpc)

  // Stub utility functions
  GetCallStack.getCallStack = () => mockCallStack
  GetScopeChain.getScopeChain = () => ['scope1']
  GetDebugPausedMessage.getDebugPausedMessage = () => 'test message'
  // createScriptMap is imported as a function, so we can stub it
  const createScriptMap = () => mockScriptMap

  // Patch the function in the module
  // @ts-ignore
  require.cache[require.resolve('../src/parts/CreateScriptMap/CreateScriptMap.ts')].exports.createScriptMap = createScriptMap

  const result = await getPausedInfo2(mockDebugId)

  expect(result).toEqual({
    scopeChain: ['scope1'],
    callStack: ['stack1'],
    pausedReason: 'test-reason',
    pausedMessage: 'test message',
    callFrameId: 'frame1',
    expandedIds: ['scope1'],
    scriptMap: mockScriptMap,
  })
})
