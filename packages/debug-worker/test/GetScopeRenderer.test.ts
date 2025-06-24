import { test, expect } from '@jest/globals'
import * as DebugScopeChainType from '../src/parts/DebugScopeChainType/DebugScopeChainType.ts'
import { getScopeRenderer } from '../src/parts/GetScopeRenderer/GetScopeRenderer.ts'
import { getNoopRows } from '../src/parts/ScopeRenderers/GetNoopRows.ts'
import { getScopeExceptionRows } from '../src/parts/ScopeRenderers/GetScopeExceptionRows.ts'
import { getScopePropertyRows } from '../src/parts/ScopeRenderers/GetScopePropertyRows.ts'
import { getScopeScopeRows } from '../src/parts/ScopeRenderers/GetScopeScopeRows.ts'
import { getScopeThisRows } from '../src/parts/ScopeRenderers/GetScopeThisRows.ts'

test('should return getScopeThisRows for This type', () => {
  const renderer = getScopeRenderer(DebugScopeChainType.This)
  expect(renderer).toBe(getScopeThisRows)
})

test('should return getScopeExceptionRows for Exception type', () => {
  const renderer = getScopeRenderer(DebugScopeChainType.Exception)
  expect(renderer).toBe(getScopeExceptionRows)
})

test('should return getScopeScopeRows for Scope type', () => {
  const renderer = getScopeRenderer(DebugScopeChainType.Scope)
  expect(renderer).toBe(getScopeScopeRows)
})

test('should return getScopePropertyRows for Property type', () => {
  const renderer = getScopeRenderer(DebugScopeChainType.Property)
  expect(renderer).toBe(getScopePropertyRows)
})

test('should return getNoopRows for unknown type', () => {
  const renderer = getScopeRenderer(100)
  expect(renderer).toBe(getNoopRows)
})
