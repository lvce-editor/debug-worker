import { test, expect } from '@jest/globals'
import * as DebugStrings from '../src/parts/DebugStrings/DebugStrings.ts'

test('local', () => {
  expect(DebugStrings.local()).toBe('Local')
})

test('namedClosure', () => {
  expect(DebugStrings.namedClosure('test')).toBe('Closure (test)')
})

test('closure', () => {
  expect(DebugStrings.closure()).toBe('Closure')
})

test('global', () => {
  expect(DebugStrings.global()).toBe('Global')
})

test('block', () => {
  expect(DebugStrings.block()).toBe('Block')
})

test('expression', () => {
  expect(DebugStrings.expression()).toBe('Expression')
})

test('module', () => {
  expect(DebugStrings.module2()).toBe('Module')
})

test('evalScope', () => {
  expect(DebugStrings.evalScope()).toBe('Eval')
})

test('script', () => {
  expect(DebugStrings.script()).toBe('Script')
})

test('withScope', () => {
  expect(DebugStrings.withScope()).toBe('`With` block')
})

test('catchScope', () => {
  expect(DebugStrings.catchScope()).toBe('`Catch` block')
})

test('debuggerPaused', () => {
  expect(DebugStrings.debuggerPaused()).toBe('Debugger paused')
})

test('debuggerPausedOnException', () => {
  expect(DebugStrings.debuggerPausedOnException()).toBe('Paused on exception')
})

test('stepInto', () => {
  expect(DebugStrings.stepInto()).toBe('Step Into')
})

test('stepOver', () => {
  expect(DebugStrings.stepOver()).toBe('Step Over')
})

test('stepOut', () => {
  expect(DebugStrings.stepOut()).toBe('Step Out')
})

test('pause', () => {
  expect(DebugStrings.pause()).toBe('Pause')
})

test('watch', () => {
  expect(DebugStrings.watch()).toBe('Watch')
})

test('breakPoints', () => {
  expect(DebugStrings.breakPoints()).toBe('BreakPoints')
})

test('scope', () => {
  expect(DebugStrings.scope()).toBe('Scope')
})

test('callStack', () => {
  expect(DebugStrings.callStack()).toBe('Call Stack')
})

test('notPaused', () => {
  expect(DebugStrings.notPaused()).toBe('Not Paused')
})

test('resume', () => {
  expect(DebugStrings.resume()).toBe('Resume')
})

test('restart', () => {
  expect(DebugStrings.restart()).toBe('Restart')
})

test('stop', () => {
  expect(DebugStrings.stop()).toBe('Stop')
})

test('pauseOnExceptions', () => {
  expect(DebugStrings.pauseOnExceptions()).toBe('Pause on Exceptions')
})

test('pauseOnUncaughtExceptions', () => {
  expect(DebugStrings.pauseOnUncaughtExceptions()).toBe('Pause on uncaught Exceptions')
})
