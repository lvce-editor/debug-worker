import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RpcId } from '@lvce-editor/rpc-registry'
import type { ParsedScriptMap } from '../src/parts/ParsedScriptMap/ParsedScriptMap.ts'
import { createScriptMap as realCreateScriptMap } from '../src/parts/CreateScriptMap/CreateScriptMap.ts'
import * as GetCallStack from '../src/parts/GetCallStack/GetCallStack.ts'
import * as GetDebugPausedMessage from '../src/parts/GetDebugPausedMessage/GetDebugPausedMessage.ts'
import { getPausedInfo2 } from '../src/parts/GetPausedInfo2/GetPausedInfo2.ts'
import * as GetScopeChain from '../src/parts/GetScopeChain/GetScopeChain.ts'
import * as RpcRegistry from '../src/parts/RpcRegistry/RpcRegistry.ts'

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

  // Instead of reassigning, use local helpers for utility functions
  const originalGetCallStack = GetCallStack.getCallStack
  const originalGetScopeChain = GetScopeChain.getScopeChain
  const originalGetDebugPausedMessage = GetDebugPausedMessage.getDebugPausedMessage
  const originalCreateScriptMap = realCreateScriptMap

  // @ts-ignore
  GetCallStack.getCallStack = () => mockCallStack
  // @ts-ignore
  GetScopeChain.getScopeChain = () => ['scope1']
  // @ts-ignore
  GetDebugPausedMessage.getDebugPausedMessage = () => 'test message'
  // @ts-ignore
  require.cache[require.resolve('../src/parts/CreateScriptMap/CreateScriptMap.ts')].exports.createScriptMap = () => mockScriptMap

  try {
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
  } finally {
    // Restore original functions
    // @ts-ignore
    GetCallStack.getCallStack = originalGetCallStack
    // @ts-ignore
    GetScopeChain.getScopeChain = originalGetScopeChain
    // @ts-ignore
    GetDebugPausedMessage.getDebugPausedMessage = originalGetDebugPausedMessage
    // @ts-ignore
    require.cache[require.resolve('../src/parts/CreateScriptMap/CreateScriptMap.ts')].exports.createScriptMap = originalCreateScriptMap
  }
})
