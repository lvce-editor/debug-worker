import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const renderEventListeners = (): readonly DomEventListener[] => {
  return [
    {
      name: DomEventListenerFunctions.HandleClickContinue,
      params: ['handleClickContinue'],
    },
    {
      name: DomEventListenerFunctions.HandleClickPause,
      params: ['handleClickPause'],
    },
    {
      name: DomEventListenerFunctions.HandleClickStepOver,
      params: ['handleClickStepOver'],
    },
    {
      name: DomEventListenerFunctions.HandleClickStepInto,
      params: ['handleClickStepInto'],
    },
    {
      name: DomEventListenerFunctions.HandleClickStepOut,
      params: ['handleClickStepOut'],
    },
    {
      name: DomEventListenerFunctions.HandleClickSectionWatch,
      params: ['HandleClickSectionWatch'],
    },
    {
      name: DomEventListenerFunctions.HandleClickSectionBreakPoints,
      params: ['handleClickSectionBreakpoints'],
    },
    {
      name: DomEventListenerFunctions.HandleClickSectionScope,
      params: ['handleClickSectionScope'],
    },
    {
      name: DomEventListenerFunctions.HandleClickSectionCallstack,
      params: ['handleClickSectionCallstack'],
    },
    {
      name: DomEventListenerFunctions.HandleClickSectionBreakPoints,
      params: ['handleClickSectionBreakPoints'],
    },
    {
      name: DomEventListenerFunctions.HandleDebugInput,
      params: ['handleDebugInput', 'event.target.value'],
    },
    {
      name: DomEventListenerFunctions.HandleClickSectionHeading,
      // TODO find a better way than className to differentiate items
      params: ['handleClickSectionHeading', 'event.target.className'],
    },
    {
      name: DomEventListenerFunctions.HandleClickCheckBox,
      params: ['HandleClickCheckBox', 'event.target.name'],
    },
    {
      name: DomEventListenerFunctions.HandleClickDebugButton,
      params: ['handleClickDebugButton', 'event.target.name'],
    },
  ]
}
