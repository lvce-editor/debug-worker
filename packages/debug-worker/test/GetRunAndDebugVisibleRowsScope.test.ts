import { test, expect } from '@jest/globals'
import { getRunAndDebugVisibleRowsScope } from '../src/parts/GetRunAndDebugVisibleRowsScope/GetRunAndDebugVisibleRowsScope.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as DebugSectionId from '../src/parts/DebugSectionId/DebugSectionId.ts'
import * as DebugStrings from '../src/parts/DebugStrings/DebugStrings.ts'
import * as DebugRowName from '../src/parts/DebugRowName/DebugRowName.ts'

test('getRunAndDebugVisibleRowsScope returns collapsed section when scopeExpanded is false', () => {
  const state = createDefaultState()
  const rows = getRunAndDebugVisibleRowsScope(state)
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
  })
})

test('getRunAndDebugVisibleRowsScope returns not paused message when scopeExpanded is true and scopeChain is empty', () => {
  const state = {
    ...createDefaultState(),
    scopeExpanded: true,
    scopeChain: [],
  }
  const rows = getRunAndDebugVisibleRowsScope(state)
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
  })
})

test('getRunAndDebugVisibleRowsScope returns scope items when scopeExpanded is true and scopeChain has items', () => {
  const state = {
    ...createDefaultState(),
    scopeExpanded: true,
    scopeChain: [
      {
        type: 'local',
        name: 'Local',
        variables: [],
      },
    ],
  }
  const rows = getRunAndDebugVisibleRowsScope(state)
  expect(rows[0]).toEqual({
    type: DebugRowType.SectionHeading,
    text: DebugStrings.scope(),
    expanded: true,
    key: DebugSectionId.Scope,
    value: '',
    indent: 0,
    valueType: '',
    name: DebugRowName.Scope,
  })
  expect(rows.length).toBeGreaterThan(1)
})
