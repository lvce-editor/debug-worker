import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugRowName from '../src/parts/DebugRowName/DebugRowName.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as DebugSectionId from '../src/parts/DebugSectionId/DebugSectionId.ts'
import { handleArrowRight } from '../src/parts/HandleArrowRight/HandleArrowRight.ts'

test('handleArrowRight returns the same state', async () => {
  const state = createDefaultState()
  const result = await handleArrowRight(state)
  expect(result).toBe(state)
})

test('handleArrowRight expands collapsed watch section heading', async () => {
  const state = {
    ...createDefaultState(),
    watchExpanded: false,
    selectedIndex: 0,
    visibleRows: [
      {
        type: DebugRowType.SectionHeading,
        text: 'Watch',
        expanded: false,
        key: DebugSectionId.Watch,
        value: '',
        indent: 0,
        valueType: '',
        name: DebugRowName.Watch,
        description: '',
        actions: [],
        index: 0,
      },
    ],
  }
  const result = await handleArrowRight(state)
  expect(result.watchExpanded).toBe(true)
})

test('handleArrowRight does nothing if watch section heading is already expanded', async () => {
  const state = {
    ...createDefaultState(),
    watchExpanded: true,
    selectedIndex: 0,
    visibleRows: [
      {
        type: DebugRowType.SectionHeading,
        text: 'Watch',
        expanded: true,
        key: DebugSectionId.Watch,
        value: '',
        indent: 0,
        valueType: '',
        name: DebugRowName.Watch,
        description: '',
        actions: [],
        index: 0,
      },
    ],
  }
  const result = await handleArrowRight(state)
  expect(result).toBe(state)
})
