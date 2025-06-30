import { test, expect } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DebugRowName from '../src/parts/DebugRowName/DebugRowName.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as DebugSectionId from '../src/parts/DebugSectionId/DebugSectionId.ts'
import { handleArrowLeft } from '../src/parts/HandleArrowLeft/HandleArrowLeft.ts'

test('handleArrowLeft returns the same state', async () => {
  const state = createDefaultState()
  const result = await handleArrowLeft(state)
  expect(result).toBe(state)
})

test('handleArrowLeft collapses expanded watch section heading', async () => {
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
        setSize: 1,
        posInset: 1,
      },
    ],
  }
  const result = await handleArrowLeft(state)
  expect(result.watchExpanded).toBe(false)
})

test('handleArrowLeft does nothing if watch section heading is already collapsed', async () => {
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
        setSize: 1,
        posInset: 1,
      },
    ],
  }
  const result = await handleArrowLeft(state)
  expect(result).toBe(state)
})
