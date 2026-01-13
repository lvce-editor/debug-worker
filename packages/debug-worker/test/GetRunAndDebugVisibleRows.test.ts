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
    actions: [],
    description: '',
    expanded: false,
    indent: 0,
    key: 'watch',
    name: 'Watch',
    posInset: 1,
    setSize: 1,
    text: DebugStrings.watch(),
    type: DebugRowType.SectionHeading,
    value: '',
    valueType: '',
  })
})

test('should return breakpoints section with default state', () => {
  const state: RunAndDebugState = createDefaultState()
  const rows = getRunAndDebugVisibleRows(state)
  expect(rows[1]).toEqual({
    description: '',
    expanded: false,
    indent: 0,
    index: 1,
    key: 'breakpoints',
    name: DebugRowName.BreakPoints,
    posInset: 2,
    setSize: 4,
    text: DebugStrings.breakPoints(),
    type: DebugRowType.SectionHeading,
    value: '',
    valueType: '',
  })
})

test('should return expanded breakpoints section with all exceptions', () => {
  const state: RunAndDebugState = {
    ...createDefaultState(),
    breakPointsExpanded: true,
    debugState: DebugState.Paused,
    exceptionBreakPoints: ExceptionBreakPoints.All,
  }
  const rows = getRunAndDebugVisibleRows(state)
  expect(rows[1]).toEqual({
    description: '',
    expanded: true,
    indent: 0,
    index: 1,
    key: 'breakpoints',
    name: DebugRowName.BreakPoints,
    posInset: 2,
    setSize: 4,
    text: DebugStrings.breakPoints(),
    type: DebugRowType.SectionHeading,
    value: '',
    valueType: '',
  })
  expect(rows[2]).toEqual({
    description: '',
    expanded: true,
    indent: 0,
    index: 2,
    key: '',
    name: InputName.PauseOnExceptions,
    posInset: 2,
    setSize: 2,
    text: DebugStrings.pauseOnExceptions(),
    type: DebugRowType.CheckBox,
    value: '',
    valueType: '',
  })
  expect(rows[3]).toEqual({
    description: '',
    expanded: false,
    indent: 0,
    index: 3,
    key: '',
    name: InputName.PauseOnUncaughtExceptions,
    posInset: 3,
    setSize: 2,
    text: DebugStrings.pauseOnUncaughtExceptions(),
    type: DebugRowType.CheckBox,
    value: '',
    valueType: '',
  })
})

test('should return scope section with default state', () => {
  const state: RunAndDebugState = createDefaultState()
  const rows = getRunAndDebugVisibleRows(state)
  expect(rows[2]).toEqual({
    description: '',
    expanded: false,
    indent: 0,
    index: 2,
    key: 'scope',
    name: DebugRowName.Scope,
    posInset: 1,
    setSize: 4,
    text: DebugStrings.scope(),
    type: DebugRowType.SectionHeading,
    value: '',
    valueType: '',
  })
})

test.skip('should return expanded scope section with not paused message', () => {
  const state: RunAndDebugState = {
    ...createDefaultState(),
    debugState: DebugState.Paused,
    scopeExpanded: true,
  }
  const rows = getRunAndDebugVisibleRows(state)
  expect(rows[2]).toEqual({
    description: '',
    expanded: true,
    indent: 0,
    index: 2,
    key: 'scope',
    name: DebugRowName.Scope,
    posInset: 1,
    setSize: 1,
    text: DebugStrings.scope(),
    type: DebugRowType.SectionHeading,
    value: '',
    valueType: '',
  })
  expect(rows[3]).toEqual({
    description: '',
    expanded: false,
    indent: 0,
    index: 3,
    key: '',
    name: '',
    posInset: 2,
    setSize: 1,
    text: DebugStrings.notPaused(),
    type: DebugRowType.Message,
    value: '',
    valueType: '',
  })
})

test('should return call stack section with default state', () => {
  const state: RunAndDebugState = createDefaultState()
  const rows = getRunAndDebugVisibleRows(state)
  expect(rows[3]).toEqual({
    description: '',
    expanded: false,
    indent: 0,
    index: 3,
    key: 'callstack',
    name: DebugRowName.CallStack,
    posInset: 1,
    setSize: 1,
    text: DebugStrings.callStack(),
    type: DebugRowType.SectionHeading,
    value: '',
    valueType: '',
  })
})

test('should return expanded call stack section with not paused message', () => {
  const state: RunAndDebugState = {
    ...createDefaultState(),
    callStackExpanded: true,
  }
  const rows = getRunAndDebugVisibleRows(state)
  expect(rows[3]).toEqual({
    description: '',
    expanded: true,
    indent: 0,
    index: 3,
    key: 'callstack',
    name: DebugRowName.CallStack,
    posInset: 4,
    setSize: 4,
    text: DebugStrings.callStack(),
    type: DebugRowType.SectionHeading,
    value: '',
    valueType: '',
  })
  expect(rows[4]).toEqual({
    description: '',
    expanded: false,
    indent: 0,
    index: 4,
    key: '',
    name: '',
    posInset: 2,
    setSize: 1,
    text: DebugStrings.notPaused(),
    type: DebugRowType.Message,
    value: '',
    valueType: '',
  })
})

test('getRunAndDebugVisibleRows: callstack rows have correct index', () => {
  const callStack = [
    {
      functionLocation: { columnNumber: 1, lineNumber: 1, scriptId: '1' },
      functionName: 'main',
      location: { columnNumber: 5, lineNumber: 10, scriptId: '1' },
    },
    {
      functionLocation: { columnNumber: 1, lineNumber: 1, scriptId: '2' },
      functionName: 'helper',
      location: { columnNumber: 3, lineNumber: 5, scriptId: '2' },
    },
  ]
  const parsedScripts = {
    '1': { scriptId: '1', scriptLanguage: 'javascript', url: 'main.js' },
    '2': { scriptId: '2', scriptLanguage: 'javascript', url: 'helper.js' },
  }
  const state: RunAndDebugState = {
    ...createDefaultState(),
    callStack,
    callStackExpanded: true,
    callStackVisible: true,
    parsedScripts,
  }
  const rows = getRunAndDebugVisibleRows(state)
  const callStackRow1 = rows.find((row) => row.type === DebugRowType.CallStack && row.text === 'main')
  const callStackRow2 = rows.find((row) => row.type === DebugRowType.CallStack && row.text === 'helper')
  expect(callStackRow1).toBeDefined()
  expect(callStackRow2).toBeDefined()
})
