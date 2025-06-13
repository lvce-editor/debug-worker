import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { ExtensionHost, RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickScopeValue } from '../src/parts/ScopeChain/ScopeChain.ts'

test('handleClickScopeValue collapses when element is expanded', async () => {
  const mockRendererRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, event: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent' && event === 'onDebug:1') {
        return Promise.resolve()
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRendererRpc)

  const mockExtensionRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, debugId: string, objectId: string) => {
      if (method === 'ExtensionHostDebug.getProperties' && debugId === '1' && objectId === '1') {
        return Promise.resolve([])
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHost.set(mockExtensionRpc)

  const state = {
    ...createDefaultState(),
    debugId: '1',
    scopeChain: [
      { key: 'test', objectId: '1', indent: 0 },
      { key: 'child', objectId: '2', indent: 1 },
    ],
    expandedIds: ['1'],
  }
  const newState = await handleClickScopeValue(state, 'test')
  expect(newState.expandedIds).toEqual([])
  expect(newState.scopeChain).toEqual([{ key: 'test', objectId: '1', indent: 0 }])
})

test('handleClickScopeValue expands when element is collapsed', async () => {
  const mockRendererRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, event: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent' && event === 'onDebug:1') {
        return Promise.resolve()
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRendererRpc)

  const mockExtensionRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string, debugId: string, objectId: string) => {
      if (method === 'ExtensionHostDebug.getProperties' && debugId === '1' && objectId === '1') {
        return Promise.resolve([
          {
            name: 'child',
            value: 'test',
            type: 'string',
          },
        ])
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  ExtensionHost.set(mockExtensionRpc)

  const state = {
    ...createDefaultState(),
    debugId: '1',
    scopeChain: [{ key: 'test', objectId: '1', indent: 0 }],
    expandedIds: [],
  }
  const newState = await handleClickScopeValue(state, 'test')
  expect(newState.expandedIds).toEqual(['1'])
  expect(newState.scopeChain).toEqual([
    { key: 'test', objectId: '1', indent: 0 },
    { key: 'child', objectId: '2', indent: 1 },
  ])
})
