import { test, expect } from '@jest/globals'
import { getDebugButtonHandler } from '../src/parts/GetDebugButtonHandler/GetDebugButtonHandler.ts'
import { pause, resume, stepInto, stepOut, stepOver } from '../src/parts/HandlePaused/HandlePaused.ts'
import * as InputName from '../src/parts/InputName/InputName.ts'

test('getDebugButtonHandler', () => {
  expect(getDebugButtonHandler(InputName.DebugPause)).toBe(pause)
  expect(getDebugButtonHandler(InputName.DebugResume)).toBe(resume)
  expect(getDebugButtonHandler(InputName.DebugStepInto)).toBe(stepInto)
  expect(getDebugButtonHandler(InputName.DebugStepOver)).toBe(stepOver)
  expect(getDebugButtonHandler(InputName.DebugStepOut)).toBe(stepOut)
  expect(getDebugButtonHandler(InputName.DebugStop)).toBeDefined()
  expect(getDebugButtonHandler('unknown')).toBeDefined()
})
