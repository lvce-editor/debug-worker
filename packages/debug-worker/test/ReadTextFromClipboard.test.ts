import { test, expect } from '@jest/globals'
import { readTextFromClipboard } from '../src/parts/ReadTextFromClipboard/ReadTextFromClipboard.ts'

test('readTextFromClipboard should return a promise that resolves to empty string', async () => {
  const result = readTextFromClipboard()
  expect(result).toBeInstanceOf(Promise)
  await expect(result).resolves.toBe('')
})
