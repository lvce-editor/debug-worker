import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as DebugStrings from '../src/parts/DebugStrings/DebugStrings.ts'
import * as ExceptionBreakPoints from '../src/parts/ExceptionBreakPoints/ExceptionBreakPoints.ts'
import { getRunAndDebugVisibleRows } from '../src/parts/GetRunAndDebugVisibleRows/GetRunAndDebugVisibleRows.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('should return watch section with default state', () => {
  const state = createDefaultState()
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
  })
})

test('should return breakpoints section with default state', () => {
  const state = createDefaultState()
  const rows = getRunAndDebugVisibleRows(state)
  expect(rows[1]).toEqual({
    type: DebugRowType.SectionHeading,
    text: DebugStrings.breakPoints(),
    expanded: false,
    key: 'breakpoints',
    value: '',
    indent: 0,
    valueType: '',
    name: '',
    description: '',
  })
})

test('should return expanded breakpoints section with all exceptions', () => {
  const state = {
    ...createDefaultState(),
    breakPointsExpanded: true,
    exceptionBreakPoints: ExceptionBreakPoints.All,
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
    name: '',
    description: '',
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
    name: 'Scope',
    description: '',
  })
})

test('should return expanded scope section with not paused message', () => {
  const state = {
    ...createDefaultState(),
    scopeExpanded: true,
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
    name: 'Scope',
    description: '',
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
  })
})

test('should return call stack section with default state', () => {
  const state = createDefaultState()
  const rows = getRunAndDebugVisibleRows(state)
  expect(rows[3]).toEqual({
    type: DebugRowType.SectionHeading,
    text: DebugStrings.callStack(),
    expanded: false,
    key: '',
    value: '',
    indent: 0,
    valueType: '',
    name: 'CallStack',
    description: '',
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
    name: 'CallStack',
    description: '',
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
  })
})
