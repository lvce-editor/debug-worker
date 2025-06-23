import { test, expect } from '@jest/globals'
import { copyTextToClipboard } from '../src/parts/CopyTextToClipboard/CopyTextToClipboard.ts'

test('copyTextToClipboard should return a promise that resolves', async () => {
  const result = copyTextToClipboard('test text')
  expect(result).toBeInstanceOf(Promise)
  await expect(result).resolves.toBeUndefined()
})
