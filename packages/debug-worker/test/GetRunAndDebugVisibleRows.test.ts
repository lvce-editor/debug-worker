import { expect, test } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugRowName from '../src/parts/DebugRowName/DebugRowName.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as DebugState from '../src/parts/DebugState/DebugState.ts'
import * as DebugStrings from '../src/parts/DebugStrings/DebugStrings.ts'
import * as ExceptionBreakPoints from '../src/parts/ExceptionBreakPoints/ExceptionBreakPoints.ts'
import { getRunAndDebugVisibleRows } from '../src/parts/GetRunAndDebugVisibleRows/GetRunAndDebugVisibleRows.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test.skip('should return watch section with default state', () => {
  const state: RunAndDebugState = createDefaultState()
  const rows = getRunAndDebugVisibleRows(state)
  expect(rows[0]).toEqual({
    type: DebugRowType.SectionHeading,
    text: DebugStrings.watch(),
    expanded: false,
    key: 'watch',
    value: '',
    indent: 0,
    valueType: '',
    name: 'Watch',
    description: '',
    actions: [],
    setSize: 1,
    posInset: 1,
  })
})

test('should return breakpoints section with default state', () => {
  const state: RunAndDebugState = createDefaultState()
  const rows = getRunAndDebugVisibleRows(state)
  expect(rows[1]).toEqual({
    type: DebugRowType.SectionHeading,
    text: DebugStrings.breakPoints(),
    expanded: false,
    key: 'breakpoints',
    value: '',
    indent: 0,
    valueType: '',
    name: DebugRowName.BreakPoints,
    description: '',
    index: 0,
    setSize: 4,
    posInset: 1,
  })
})

test('should return expanded breakpoints section with all exceptions', () => {
  const state: RunAndDebugState = {
    ...createDefaultState(),
    breakPointsExpanded: true,
    exceptionBreakPoints: ExceptionBreakPoints.All,
    debugState: DebugState.Paused,
  }
  const rows = getRunAndDebugVisibleRows(state)
  expect(rows[1]).toEqual({
    type: DebugRowType.SectionHeading,
    text: DebugStrings.breakPoints(),
    expanded: true,
    key: 'breakpoints',
    value: '',
    indent: 0,
    valueType: '',
    name: DebugRowName.BreakPoints,
    description: '',
    index: 0,
    setSize: 4,
    posInset: 1,
  })
  expect(rows[2]).toEqual({
    type: DebugRowType.CheckBox,
    text: DebugStrings.pauseOnExceptions(),
    expanded: true,
    key: '',
    value: '',
    indent: 0,
    valueType: '',
    name: InputName.PauseOnExceptions,
    description: '',
    index: 1,
    setSize: 2,
    posInset: 2,
  })
  expect(rows[3]).toEqual({
    type: DebugRowType.CheckBox,
    text: DebugStrings.pauseOnUncaughtExceptions(),
    expanded: false,
    key: '',
    value: '',
    indent: 0,
    valueType: '',
    name: InputName.PauseOnUncaughtExceptions,
    description: '',
    index: 2,
    setSize: 2,
    posInset: 3,
  })
})

test('should return scope section with default state', () => {
  const state = createDefaultState()
  const rows = getRunAndDebugVisibleRows(state)
  expect(rows[2]).toEqual({
    type: DebugRowType.SectionHeading,
    text: DebugStrings.scope(),
    expanded: false,
    key: 'scope',
    value: '',
    indent: 0,
    valueType: '',
    name: DebugRowName.Scope,
    description: '',
    index: 2,
    setSize: 4,
    posInset: 1,
  })
})

test.skip('should return expanded scope section with not paused message', () => {
  const state: RunAndDebugState = {
    ...createDefaultState(),
    scopeExpanded: true,
    debugState: DebugState.Paused,
  }
  const rows = getRunAndDebugVisibleRows(state)
  expect(rows[2]).toEqual({
    type: DebugRowType.SectionHeading,
    text: DebugStrings.scope(),
    expanded: true,
    key: 'scope',
    value: '',
    indent: 0,
    valueType: '',
    name: DebugRowName.Scope,
    description: '',
    index: 2,
    setSize: 1,
    posInset: 1,
  })
  expect(rows[3]).toEqual({
    type: DebugRowType.Message,
    text: DebugStrings.notPaused(),
    expanded: false,
    key: '',
    value: '',
    indent: 0,
    valueType: '',
    name: '',
    description: '',
    index: 3,
    setSize: 1,
    posInset: 2,
  })
})

test('should return call stack section with default state', () => {
  const state = createDefaultState()
  const rows = getRunAndDebugVisibleRows(state)
  expect(rows[3]).toEqual({
    type: DebugRowType.SectionHeading,
    text: DebugStrings.callStack(),
    expanded: false,
    key: 'callstack',
    value: '',
    indent: 0,
    valueType: '',
    name: DebugRowName.CallStack,
    description: '',
    index: 3,
    setSize: 1,
    posInset: 1,
  })
})

test('should return expanded call stack section with not paused message', () => {
  const state = {
    ...createDefaultState(),
    callStackExpanded: true,
  }
  const rows = getRunAndDebugVisibleRows(state)
  expect(rows[3]).toEqual({
    type: DebugRowType.SectionHeading,
    text: DebugStrings.callStack(),
    expanded: true,
    key: 'callstack',
    value: '',
    indent: 0,
    valueType: '',
    name: DebugRowName.CallStack,
    description: '',
    index: 3,
    setSize: 4,
    posInset: 1,
  })
  expect(rows[4]).toEqual({
    type: DebugRowType.Message,
    text: DebugStrings.notPaused(),
    expanded: false,
    key: '',
    value: '',
    indent: 0,
    valueType: '',
    name: '',
    description: '',
    index: 4,
    setSize: 1,
    posInset: 2,
  })
})

test('getRunAndDebugVisibleRows: callstack rows have correct index', () => {
  const callStack = [
    {
      functionName: 'main',
      functionLocation: { scriptId: '1', lineNumber: 1, columnNumber: 1 },
      location: { scriptId: '1', lineNumber: 10, columnNumber: 5 },
    },
    {
      functionName: 'helper',
      functionLocation: { scriptId: '2', lineNumber: 1, columnNumber: 1 },
      location: { scriptId: '2', lineNumber: 5, columnNumber: 3 },
    },
  ]
  const parsedScripts = {
    '1': { scriptId: '1', scriptLanguage: 'javascript', url: 'main.js' },
    '2': { scriptId: '2', scriptLanguage: 'javascript', url: 'helper.js' },
  }
  const state = {
    ...createDefaultState(),
    callStackVisible: true,
    callStackExpanded: true,
    callStack,
    parsedScripts,
  }
  const rows = getRunAndDebugVisibleRows(state)
  const callStackRow1 = rows.find((row) => row.type === DebugRowType.CallStack && row.text === 'main')
  const callStackRow2 = rows.find((row) => row.type === DebugRowType.CallStack && row.text === 'helper')
  expect(callStackRow1).toBeDefined()
  expect(callStackRow2).toBeDefined()
})
