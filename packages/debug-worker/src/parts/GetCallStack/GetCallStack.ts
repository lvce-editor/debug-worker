import * as Assert from '../Assert/Assert.ts'

export const getCallStack = (callFrames: readonly any[]): any[] => {
  Assert.array(callFrames)
  const callStack = Array.from(callFrames, (callFrame) => ({
    functionLocation: callFrame.functionLocation,
    functionName: callFrame.functionName || '(anonymous)',
    location: callFrame.location,
  }))
  return callStack
}
