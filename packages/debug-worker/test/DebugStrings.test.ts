import { test, expect } from '@jest/globals'
import * as DebugStrings from '../src/parts/DebugStrings/DebugStrings.ts'

test('local', () => {
  expect(DebugStrings.local()).toBe('Local')
})

test('namedClosure', () => {
  expect(DebugStrings.namedClosure('test')).toBe('test')
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
  expect(DebugStrings.module()).toBe('Module')
})

test('evalScope', () => {
  expect(DebugStrings.evalScope()).toBe('Eval')
})

test('script', () => {
  expect(DebugStrings.script()).toBe('Script')
})

test('withScope', () => {
  expect(DebugStrings.withScope()).toBe('With')
})

test('catchScope', () => {
  expect(DebugStrings.catchScope()).toBe('Catch')
})

test('debuggerPaused', () => {
  expect(DebugStrings.debuggerPaused()).toBe('Debugger Paused')
})

test('debuggerPausedOnException', () => {
  expect(DebugStrings.debuggerPausedOnException()).toBe('Debugger Paused On Exception')
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
  expect(DebugStrings.breakPoints()).toBe('Break Points')
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
  expect(DebugStrings.pauseOnExceptions()).toBe('Pause On Exceptions')
})

test('pauseOnUncaughtExceptions', () => {
  expect(DebugStrings.pauseOnUncaughtExceptions()).toBe('Pause On Uncaught Exceptions')
})
