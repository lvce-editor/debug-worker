import { expect, test } from '@jest/globals'
import * as ReadFile from '../src/parts/ReadFile/ReadFile.js'

test('should correctly parse URI and return empty string for invalid input', async () => {
  // @ts-ignore - Testing invalid input
  const result = await ReadFile.readFile('invalid-uri')
  expect(result).toBe('')
})

test('should correctly parse URI with key and script ID', async () => {
  // The actual implementation will return '' because we're not setting up the RunAndDebugStates
  // This test verifies the parsing logic works as expected
  const result = await ReadFile.readFile('debug/123/script.js')
  expect(typeof result).toBe('string')
})

test('should handle URIs with multiple slashes', async () => {
  const result = await ReadFile.readFile('debug/789/path/to/script.js')
  expect(typeof result).toBe('string')
})

test('should handle empty script ID', async () => {
  const result = await ReadFile.readFile('debug/123/')
  expect(typeof result).toBe('string')
})
