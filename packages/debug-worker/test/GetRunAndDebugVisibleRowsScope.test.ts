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
    type: DebugRowType.SectionHeading,
    text: DebugStrings.scope(),
    expanded: false,
    key: DebugSectionId.Scope,
    value: '',
    indent: 0,
    valueType: '',
    name: DebugRowName.Scope,
    description: '',
    index: 0,
    setSize: 4,
    posInset: 1,
  })
})

test.skip('getRunAndDebugVisibleRowsScope returns not paused message when scopeExpanded is true and scopeChain is empty', () => {
  const state: RunAndDebugState = {
    ...createDefaultState(),
    scopeExpanded: true,
    scopeChain: [],
    debugState: DebugState.Paused,
  }
  const rows = getRunAndDebugVisibleRowsScope(state, 0, 4, 0)
  expect(rows).toHaveLength(2)
  expect(rows[0]).toEqual({
    type: DebugRowType.SectionHeading,
    text: DebugStrings.scope(),
    expanded: true,
    key: DebugSectionId.Scope,
    value: '',
    indent: 0,
    valueType: '',
    name: DebugRowName.Scope,
    description: '',
    index: 0,
    setSize: 1,
    posInset: 1,
  })
  expect(rows[1]).toEqual({
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

test('getRunAndDebugVisibleRowsScope returns scope items when scopeExpanded is true and scopeChain has items', () => {
  const state: RunAndDebugState = {
    ...createDefaultState(),
    scopeExpanded: true,
    expandedIds: ['1'],
    scopeChain: [
      {
        type: 'Scope',
        name: 'Local',
        variables: [],
        key: '1',
        objectId: '1',

        valueType: 'object',
      },
    ] as any[],
  }
  const rows = getRunAndDebugVisibleRowsScope(state, 0, 4, 0)
  expect(rows[0]).toEqual({
    type: DebugRowType.SectionHeading,
    text: DebugStrings.scope(),
    expanded: true,
    key: DebugSectionId.Scope,
    value: '',
    indent: 0,
    valueType: '',
    name: DebugRowName.Scope,
    description: '',
    index: 0,
    setSize: 4,
    posInset: 1,
  })
})
