import { test, expect, jest } from '@jest/globals'

const mockDebug = {
  getProperties: async () => ({
    result: {
      result: [
        {
          name: 'test',
          value: { type: 'string', value: 'test-value' },
        },
      ],
    },
  }),
}
await jest.unstable_mockModule('../src/parts/Debug/Debug.ts', () => mockDebug)

const { getInnerChildScopeChain } = await import('../src/parts/GetInnerChildScopeChain/GetInnerChildScopeChain.ts')

test('should return cached value if available', async () => {
  const cache = {
    'test-object-id': [{ type: 3, key: 'test', value: 'cached' }],
  }
  const result = await getInnerChildScopeChain(cache, 'debug-id', 'test-object-id', 0)
  expect(result).toEqual([{ type: 3, key: 'test', value: 'cached' }])
})

test('should get properties and create scope chain', async () => {
  const cache = {}
  const result = await getInnerChildScopeChain(cache, 'debug-id', 'object-id', 0)
  expect(result).toEqual([
    {
      type: 3,
      key: 'test',
      value: '"test-value"',
      valueType: 'string',
      objectId: '',
      indent: 10,
    },
  ])
})
