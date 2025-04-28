import { expect, test } from '@jest/globals'
import { getCallStack } from '../src/parts/GetCallStack/GetCallStack.ts'

test('getCallStack - returns empty array for empty input', () => {
  const result = getCallStack([])
  expect(result).toEqual([])
})

test('getCallStack - transforms call frames correctly', () => {
  const callFrames = [
    {
      functionName: 'testFunction',
      functionLocation: 'test.js:1:1',
    },
    {
      functionName: '',
      functionLocation: 'test.js:2:2',
    },
  ]

  const result = getCallStack(callFrames)
  expect(result).toEqual([
    {
      functionName: 'testFunction',
      functionLocation: 'test.js:1:1',
    },
    {
      functionName: '(anonymous)',
      functionLocation: 'test.js:2:2',
    },
  ])
})
