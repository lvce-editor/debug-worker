import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RpcId } from '@lvce-editor/rpc-registry'
import type { ParsedScriptMap } from '../src/parts/ParsedScriptMap/ParsedScriptMap.ts'
import { getPausedInfo2 } from '../src/parts/GetPausedInfo2/GetPausedInfo2.ts'
import * as RpcRegistry from '../src/parts/RpcRegistry/RpcRegistry.ts'

test.skip('getPausedInfo2', async () => {
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
  const maxDescriptionLength = 100
  // Register mock RPC for ExtensionHostDebug and Debug
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, ...params: any[]) => {
      if (method === 'ExtensionHostDebug.getCallStack') {
        return mockCallFrames
      }
      if (method === 'ExtensionHostDebug.getPausedStatus') {
        return mockPausedStatus
      }
      if (method === 'ExtensionHostDebug.getScripts') {
        return mockScripts
      }
      if (method === 'ExtensionHostDebug.getProperties') {
        return mockProperties
      }
      if (method === 'GetCallStack.getCallStack') {
        return mockCallStack
      }
      if (method === 'GetScopeChain.getScopeChain') {
        return ['scope1']
      }
      if (method === 'GetDebugPausedMessage.getDebugPausedMessage') {
        return 'test message'
      }
      if (method === 'CreateScriptMap.createScriptMap') {
        return mockScriptMap
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
        return
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RpcRegistry.set(RpcId.RendererWorker, mockRendererWorkerRpc)

  try {
    const result = await getPausedInfo2(mockDebugId, maxDescriptionLength)
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
