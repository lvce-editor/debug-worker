import { test, expect } from '@jest/globals'
import * as DebugSectionId from '../src/parts/DebugSectionId/DebugSectionId.ts'
import { getSectionClickHandler } from '../src/parts/GetSectionClickHandler/GetSectionClickHandler.ts'
import { handleClickSectionBreakPoints } from '../src/parts/HandleClickSectionBreakPoints/HandleClickSectionBreakPoints.ts'
import { handleClickSectionCallstack } from '../src/parts/HandleClickSectionCallstack/HandleClickSectionCallstack.ts'
import { handleClickSectionScope } from '../src/parts/HandleClickSectionScope/HandleClickSectionScope.ts'
import { handleClickSectionUnkown } from '../src/parts/HandleClickSectionUnknown/HandleClickSectionUnknown.ts'
import { handleClickSectionWatch } from '../src/parts/HandleClickSectionWatch/HandleClickSectionWatch.ts'

test('returns watch handler for watch section', () => {
  const handler = getSectionClickHandler(DebugSectionId.Watch)
  expect(handler).toBe(handleClickSectionWatch)
})

test('returns breakpoints handler for breakpoints section', () => {
  const handler = getSectionClickHandler(DebugSectionId.BreakPoints)
  expect(handler).toBe(handleClickSectionBreakPoints)
})

test('returns scope handler for scope section', () => {
  const handler = getSectionClickHandler(DebugSectionId.Scope)
  expect(handler).toBe(handleClickSectionScope)
})

test('returns callstack handler for callstack section', () => {
  const handler = getSectionClickHandler(DebugSectionId.CallStack)
  expect(handler).toBe(handleClickSectionCallstack)
})

test('returns unknown handler for unknown section', () => {
  const handler = getSectionClickHandler('unknown')
  expect(handler).toBe(handleClickSectionUnkown)
})
