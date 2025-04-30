import { test, expect } from '@jest/globals'
import * as DebugDisplay from '../src/parts/DebugDisplay/DebugDisplay.ts'
import * as DebuggerPausedReason from '../src/parts/DebugPausedReason/DebugPausedReason.ts'
import * as DebugScopeType from '../src/parts/DebugScopeType/DebugScopeType.ts'
import * as DebugStrings from '../src/parts/DebugStrings/DebugStrings.ts'

test('getScopeLabel - local', () => {
  const element = { type: DebugScopeType.Local }
  const result = DebugDisplay.getScopeLabel(element)
  expect(result).toBe(DebugStrings.local())
})

test('getScopeLabel - closure with name', () => {
  const element = { type: DebugScopeType.Closure, name: 'testClosure' }
  const result = DebugDisplay.getScopeLabel(element)
  expect(result).toBe(DebugStrings.namedClosure('testClosure'))
})

test('getScopeLabel - closure without name', () => {
  const element = { type: DebugScopeType.Closure }
  const result = DebugDisplay.getScopeLabel(element)
  expect(result).toBe(DebugStrings.closure())
})

test('getScopeLabel - global', () => {
  const element = { type: DebugScopeType.Global }
  const result = DebugDisplay.getScopeLabel(element)
  expect(result).toBe(DebugStrings.global())
})

test('getScopeLabel - block', () => {
  const element = { type: DebugScopeType.Block }
  const result = DebugDisplay.getScopeLabel(element)
  expect(result).toBe(DebugStrings.block())
})

test('getScopeLabel - wasm expression stack', () => {
  const element = { type: DebugScopeType.WasmExpressionStack }
  const result = DebugDisplay.getScopeLabel(element)
  expect(result).toBe(DebugStrings.expression())
})

test('getScopeLabel - module', () => {
  const element = { type: DebugScopeType.Module }
  const result = DebugDisplay.getScopeLabel(element)
  expect(result).toBe(DebugStrings.module2())
})

test('getScopeLabel - eval', () => {
  const element = { type: DebugScopeType.Eval }
  const result = DebugDisplay.getScopeLabel(element)
  expect(result).toBe(DebugStrings.evalScope())
})

test('getScopeLabel - script', () => {
  const element = { type: DebugScopeType.Script }
  const result = DebugDisplay.getScopeLabel(element)
  expect(result).toBe(DebugStrings.script())
})

test('getScopeLabel - with', () => {
  const element = { type: DebugScopeType.With }
  const result = DebugDisplay.getScopeLabel(element)
  expect(result).toBe(DebugStrings.withScope())
})

test('getScopeLabel - catch', () => {
  const element = { type: DebugScopeType.Catch }
  const result = DebugDisplay.getScopeLabel(element)
  expect(result).toBe(DebugStrings.catchScope())
})

test('getScopeLabel - unknown type', () => {
  const element = { type: 'unknown' }
  const result = DebugDisplay.getScopeLabel(element)
  expect(result).toBe('unknown')
})

test('getPausedMessage - exception', () => {
  expect(DebugDisplay.getPausedMessage(DebuggerPausedReason.Exception)).toBe('Paused on exception')
})
