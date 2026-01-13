import { expect, test } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugRowName from '../src/parts/DebugRowName/DebugRowName.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as DebugSectionId from '../src/parts/DebugSectionId/DebugSectionId.ts'
import * as DebugStrings from '../src/parts/DebugStrings/DebugStrings.ts'
import { getRunAndDebugVisibleRowsCallStack } from '../src/parts/GetRunAndDebugVisibleRowsCallStack/GetRunAndDebugVisibleRowsCallStack.ts'

test('should return empty array when callStackVisible is false', () => {
  const state: RunAndDebugState = {
    ...createDefaultState(),
    callStackVisible: false,
  }
  const rows = getRunAndDebugVisibleRowsCallStack(state, 0, 4, 0)
  expect(rows).toEqual([])
})

test('should return collapsed call stack section when callStackExpanded is false', () => {
  const state: RunAndDebugState = {
    ...createDefaultState(),
    callStackExpanded: false,
    callStackVisible: true,
  }
  const rows = getRunAndDebugVisibleRowsCallStack(state, 0, 4, 0)
  expect(rows).toEqual([
    {
      description: '',
      expanded: false,
      indent: 0,
      index: 0,
      key: DebugSectionId.CallStack,
      name: DebugRowName.CallStack,
      posInset: 1,
      setSize: 1,
      text: DebugStrings.callStack(),
      type: DebugRowType.SectionHeading,
      value: '',
      valueType: '',
    },
  ])
})

test('should return expanded call stack section with not paused message when callStack is empty', () => {
  const state: RunAndDebugState = {
    ...createDefaultState(),
    callStack: [],
    callStackExpanded: true,
    callStackVisible: true,
  }
  const rows = getRunAndDebugVisibleRowsCallStack(state, 0, 4, 0)
  expect(rows).toEqual([
    {
      description: '',
      expanded: true,
      indent: 0,
      index: 0,
      key: DebugSectionId.CallStack,
      name: DebugRowName.CallStack,
      posInset: 1,
      setSize: 4,
      text: DebugStrings.callStack(),
      type: DebugRowType.SectionHeading,
      value: '',
      valueType: '',
    },
    {
      description: '',
      expanded: false,
      indent: 0,
      index: 1,
      key: '',
      name: '',
      posInset: 2,
      setSize: 1,
      text: DebugStrings.notPaused(),
      type: DebugRowType.Message,
      value: '',
      valueType: '',
    },
  ])
})

test('should return expanded call stack section with callstack items and correct indices', () => {
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
  const rows = getRunAndDebugVisibleRowsCallStack(state, 0, 4, 0)
  expect(rows[0]).toEqual({
    description: '',
    expanded: true,
    indent: 0,
    index: 0,
    key: DebugSectionId.CallStack,
    name: DebugRowName.CallStack,
    posInset: 1,
    setSize: 4,
    text: DebugStrings.callStack(),
    type: DebugRowType.SectionHeading,
    value: '',
    valueType: '',
  })
  expect(rows[1]).toEqual({
    description: 'main.js:11',
    expanded: false,
    hasArrow: true,
    indent: 0,
    index: 1,
    key: DebugSectionId.CallStack,
    name: '',
    posInset: 2,
    setSize: 3,
    text: 'main',
    type: DebugRowType.CallStack,
    value: '',
    valueType: '',
  })
  expect(rows[2]).toEqual({
    description: 'helper.js:6',
    expanded: false,
    hasArrow: false,
    indent: 0,
    index: 2,
    key: DebugSectionId.CallStack,
    name: '',
    posInset: 3,
    setSize: 3,
    text: 'helper',
    type: DebugRowType.CallStack,
    value: '',
    valueType: '',
  })
})
