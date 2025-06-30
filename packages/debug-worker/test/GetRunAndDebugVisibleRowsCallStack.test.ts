import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugRowName from '../src/parts/DebugRowName/DebugRowName.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as DebugSectionId from '../src/parts/DebugSectionId/DebugSectionId.ts'
import * as DebugStrings from '../src/parts/DebugStrings/DebugStrings.ts'
import { getRunAndDebugVisibleRowsCallStack } from '../src/parts/GetRunAndDebugVisibleRowsCallStack/GetRunAndDebugVisibleRowsCallStack.ts'

test('should return empty array when callStackVisible is false', () => {
  const state = {
    ...createDefaultState(),
    callStackVisible: false,
  }
  const rows = getRunAndDebugVisibleRowsCallStack(state, 0)
  expect(rows).toEqual([])
})

test('should return collapsed call stack section when callStackExpanded is false', () => {
  const state = {
    ...createDefaultState(),
    callStackVisible: true,
    callStackExpanded: false,
  }
  const rows = getRunAndDebugVisibleRowsCallStack(state, 0)
  expect(rows).toEqual([
    {
      type: DebugRowType.SectionHeading,
      text: DebugStrings.callStack(),
      expanded: false,
      key: DebugSectionId.CallStack,
      value: '',
      indent: 0,
      valueType: '',
      name: DebugRowName.CallStack,
      description: '',
      index: 0,
      setSize: 1,
      posInset: 1,
    },
  ])
})

test('should return expanded call stack section with not paused message when callStack is empty', () => {
  const state = {
    ...createDefaultState(),
    callStackVisible: true,
    callStackExpanded: true,
    callStack: [],
  }
  const rows = getRunAndDebugVisibleRowsCallStack(state, 0)
  expect(rows).toEqual([
    {
      type: DebugRowType.SectionHeading,
      text: DebugStrings.callStack(),
      expanded: true,
      key: DebugSectionId.CallStack,
      value: '',
      indent: 0,
      valueType: '',
      name: DebugRowName.CallStack,
      description: '',
      index: 0,
      setSize: 1,
      posInset: 1,
    },
    {
      type: DebugRowType.Message,
      text: DebugStrings.notPaused(),
      expanded: false,
      key: '',
      value: '',
      indent: 0,
      valueType: '',
      name: '',
      description: '',
      index: 1,
      setSize: 1,
      posInset: 2,
    },
  ])
})

test('should return expanded call stack section with callstack items and correct indices', () => {
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
  const rows = getRunAndDebugVisibleRowsCallStack(state, 0)
  expect(rows[0]).toEqual({
    type: DebugRowType.SectionHeading,
    text: DebugStrings.callStack(),
    expanded: true,
    key: DebugSectionId.CallStack,
    value: '',
    indent: 0,
    valueType: '',
    name: DebugRowName.CallStack,
    description: '',
    index: 0,
    setSize: 3,
    posInset: 1,
  })
  expect(rows[1]).toEqual({
    type: DebugRowType.CallStack,
    text: 'main',
    expanded: false,
    key: DebugSectionId.CallStack,
    value: '',
    indent: 0,
    valueType: '',
    name: '',
    description: 'main.js:11',
    hasArrow: true,
    index: 1,
    setSize: 1,
    posInset: 2,
  })
  expect(rows[2]).toEqual({
    type: DebugRowType.CallStack,
    text: 'helper',
    expanded: false,
    key: DebugSectionId.CallStack,
    value: '',
    indent: 0,
    valueType: '',
    name: '',
    description: 'helper.js:6',
    hasArrow: false,
    index: 1,
    setSize: 3,
    posInset: 2,
  })
})
