import { test, expect } from '@jest/globals'
import type { RunAndDebugState } from '../src/parts/RunAndDebugState/RunAndDebugState.ts'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugRowName from '../src/parts/DebugRowName/DebugRowName.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as DebugSectionId from '../src/parts/DebugSectionId/DebugSectionId.ts'
import { handleArrowLeft } from '../src/parts/HandleArrowLeft/HandleArrowLeft.ts'

test('handleArrowLeft returns the same state', async () => {
  const state: RunAndDebugState = createDefaultState()
  const result = await handleArrowLeft(state)
  expect(result).toBe(state)
})

test('handleArrowLeft collapses expanded watch section heading', async () => {
  const state: RunAndDebugState = {
    ...createDefaultState(),
    selectedIndex: 0,
    visibleRows: [
      {
        actions: [],
        description: '',
        expanded: true,
        indent: 0,
        index: 0,
        key: DebugSectionId.Watch,
        name: DebugRowName.Watch,
        posInset: 1,
        setSize: 1,
        text: 'Watch',
        type: DebugRowType.SectionHeading,
        value: '',
        valueType: '',
      },
    ],
    watchExpanded: true,
  }
  const result = await handleArrowLeft(state)
  expect(result.watchExpanded).toBe(false)
})

test('handleArrowLeft does nothing if watch section heading is already collapsed', async () => {
  const state: RunAndDebugState = {
    ...createDefaultState(),
    selectedIndex: 0,
    visibleRows: [
      {
        actions: [],
        description: '',
        expanded: false,
        indent: 0,
        index: 0,
        key: DebugSectionId.Watch,
        name: DebugRowName.Watch,
        posInset: 1,
        setSize: 1,
        text: 'Watch',
        type: DebugRowType.SectionHeading,
        value: '',
        valueType: '',
      },
    ],
    watchExpanded: false,
  }
  const result = await handleArrowLeft(state)
  expect(result).toBe(state)
})
