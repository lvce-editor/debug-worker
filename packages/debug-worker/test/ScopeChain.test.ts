import { expect, test } from '@jest/globals'
import { MockRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import { handleClickScopeValue } from '../src/parts/ScopeChain/ScopeChain.ts'

test('handleClickScopeValue collapses when element is expanded', async () => {
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve([])
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const state = {
    ...createDefaultState(),
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
  const mockRpc = MockRpc.create({
    commandMap: {},
    invoke: (method: string) => {
      if (method === 'ExtensionHostManagement.activateByEvent') {
        return Promise.resolve([{ key: 'child', objectId: '2', indent: 1 }])
      }
      throw new Error(`unexpected method ${method}`)
    },
  })
  RendererWorker.set(mockRpc)

  const state = {
    ...createDefaultState(),
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
