import { expect, test } from '@jest/globals'
import { getCallStack } from '../src/parts/GetCallStack/GetCallStack.ts'

test('getCallStack - returns empty array for empty input', () => {
  const result = getCallStack([])
  expect(result).toEqual([])
})

test('getCallStack - transforms call frames correctly', () => {
  const callFrames = [
    {
      functionLocation: 'test.js:1:1',
      functionName: 'testFunction',
    },
    {
      functionLocation: 'test.js:2:2',
      functionName: '',
    },
  ]

  const result = getCallStack(callFrames)
  expect(result).toEqual([
    {
      functionLocation: 'test.js:1:1',
      functionName: 'testFunction',
    },
    {
      functionLocation: 'test.js:2:2',
      functionName: '(anonymous)',
    },
  ])
})
