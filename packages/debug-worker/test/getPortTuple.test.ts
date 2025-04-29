import { test, expect } from '@jest/globals'
import { getPortTuple } from '../src/parts/GetPortTuple/GetPortTuple.ts'

test('getPortTuple returns a MessageChannel with two ports', () => {
  const channel = getPortTuple()
  expect(channel.port1).toBeDefined()
  expect(channel.port2).toBeDefined()
  expect(channel.port1).not.toBe(channel.port2)
})
