import { test, expect } from '@jest/globals'
import * as DebugPauseReason from '../src/parts/DebugPausedReason/DebugPausedReason.ts'
import * as DebugStrings from '../src/parts/DebugStrings/DebugStrings.ts'
import * as GetDebugPausedMessage from '../src/parts/GetDebugPausedMessage/GetDebugPausedMessage.ts'

test('getDebugPausedMessage - Other', () => {
  const result = GetDebugPausedMessage.getDebugPausedMessage(DebugPauseReason.Other)
  expect(result).toBe(DebugStrings.debuggerPaused())
})

test('getDebugPausedMessage - Exception', () => {
  const result = GetDebugPausedMessage.getDebugPausedMessage(DebugPauseReason.Exception)
  expect(result).toBe(DebugStrings.debuggerPausedOnException())
})

test('getDebugPausedMessage - Unknown Reason', () => {
  const result = GetDebugPausedMessage.getDebugPausedMessage('custom-reason')
  expect(result).toBe('Debugger paused (custom-reason)')
})
