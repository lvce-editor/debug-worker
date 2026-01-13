import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugRowName from '../src/parts/DebugRowName/DebugRowName.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as DebugSectionId from '../src/parts/DebugSectionId/DebugSectionId.ts'
import * as DebugState from '../src/parts/DebugState/DebugState.ts'
import * as DebugStrings from '../src/parts/DebugStrings/DebugStrings.ts'
import { getRunAndDebugVisibleRowsScope } from '../src/parts/GetRunAndDebugVisibleRowsScope/GetRunAndDebugVisibleRowsScope.ts'

test('getRunAndDebugVisibleRowsScope returns collapsed section when scopeExpanded is false', () => {
  const state: RunAndDebugState = createDefaultState()
  const rows = getRunAndDebugVisibleRowsScope(state, 0, 4, 0)
  expect(rows).toHaveLength(1)
  expect(rows[0]).toEqual({
    description: '',
    expanded: false,
    indent: 0,
    index: 0,
    key: DebugSectionId.Scope,
    name: DebugRowName.Scope,
    posInset: 1,
    setSize: 4,
    text: DebugStrings.scope(),
    type: DebugRowType.SectionHeading,
    value: '',
    valueType: '',
  })
})

test.skip('getRunAndDebugVisibleRowsScope returns not paused message when scopeExpanded is true and scopeChain is empty', () => {
  const state: RunAndDebugState = {
    ...createDefaultState(),
    debugState: DebugState.Paused,
    scopeChain: [],
    scopeExpanded: true,
  }
  const rows = getRunAndDebugVisibleRowsScope(state, 0, 4, 0)
  expect(rows).toHaveLength(2)
  expect(rows[0]).toEqual({
    description: '',
    expanded: true,
    indent: 0,
    index: 0,
    key: DebugSectionId.Scope,
    name: DebugRowName.Scope,
    posInset: 1,
    setSize: 1,
    text: DebugStrings.scope(),
    type: DebugRowType.SectionHeading,
    value: '',
    valueType: '',
  })
  expect(rows[1]).toEqual({
    description: '',
    expanded: false,
    indent: 0,
    key: '',
    name: '',
    text: DebugStrings.notPaused(),
    type: DebugRowType.Message,
    value: '',
    valueType: '',
  })
})

test('getRunAndDebugVisibleRowsScope returns scope items when scopeExpanded is true and scopeChain has items', () => {
  const state: RunAndDebugState = {
    ...createDefaultState(),
    expandedIds: ['1'],
    scopeChain: [
      {
        flags: 0,
        indent: 0,
        key: '1',
        label: 'Local',
        objectId: '1',
        type: 1,
        value: 'Local',
        valueType: 'object',
      },
    ],
    scopeExpanded: true,
  }
  const rows = getRunAndDebugVisibleRowsScope(state, 0, 4, 0)
  expect(rows[0]).toEqual({
    description: '',
    expanded: true,
    indent: 0,
    index: 0,
    key: DebugSectionId.Scope,
    name: DebugRowName.Scope,
    posInset: 1,
    setSize: 4,
    text: DebugStrings.scope(),
    type: DebugRowType.SectionHeading,
    value: '',
    valueType: '',
  })
})
