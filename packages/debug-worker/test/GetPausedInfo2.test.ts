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
  const mockProperties = {
    scope1: {
      result: {
        result: [
          {
            name: 'prop1',
            value: { type: 'string', value: 'value1' },
          },
        ],
      },
    },
  }

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
      if (method === 'GetCallStack.getCallStack') {
        return Promise.resolve(mockCallStack)
      }
      if (method === 'GetScopeChain.getScopeChain') {
        return Promise.resolve(['scope1'])
      }
      if (method === 'GetDebugPausedMessage.getDebugPausedMessage') {
        return Promise.resolve('test message')
      }
      if (method === 'CreateScriptMap.createScriptMap') {
        return Promise.resolve(mockScriptMap)
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RpcRegistry.set(RpcId.ExtensionHostWorker, mockRpc)

  // Register mock RPC for RendererWorker
  const mockRendererWorkerRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...params: any[]) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve()
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RpcRegistry.set(RpcId.RendererWorker, mockRendererWorkerRpc)

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
    // Clean up RPC registrations
    const emptyMockRpc = MockRpc.create({
      commandMap: {},
      invoke: () => {
        throw new Error('Unexpected method call')
      },
    })
    RpcRegistry.set(RpcId.ExtensionHostWorker, emptyMockRpc)
    RpcRegistry.set(RpcId.RendererWorker, emptyMockRpc)
  }
})
