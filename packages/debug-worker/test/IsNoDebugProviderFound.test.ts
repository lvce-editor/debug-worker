import { expect, test } from '@jest/globals'
import * as IsNoDebugProviderFound from '../src/parts/IsNoDebugProviderFound/IsNoDebugProviderFound.ts'

test('isNoDebugProviderFound', () => {
  const error = new Error('Failed to execute debug provider: no debug provider "node-debug" found')

  expect(IsNoDebugProviderFound.isNoDebugProviderFound(error)).toBe(true)
  expect(IsNoDebugProviderFound.getDebugProviderName(error)).toBe('node-debug')
})

test('isNoDebugProviderFound - other error', () => {
  const error = new Error('Failed to execute debug provider')

  expect(IsNoDebugProviderFound.isNoDebugProviderFound(error)).toBe(false)
  expect(IsNoDebugProviderFound.getDebugProviderName(error)).toBe('')
})
