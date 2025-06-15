import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'

export const renderEventListeners = (): readonly DomEventListener[] => {
  return [
    {
      name: DomEventListenerFunctions.HandleClickContinue,
      params: ['handleClickContinue'],
    },
    {
      name: DomEventListenerFunctions.HandleClickDebugButton,
      params: ['handleClickDebugButton', 'event.target.name'],
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
      params: ['handleClickSectionHeading', 'event.target.dataset.name'],
    },
    {
      name: DomEventListenerFunctions.HandleClickCheckBox,
      params: ['handleClickCheckBox', 'event.target.name'],
    },
    {
      name: DomEventListenerFunctions.HandleClickDebugButton,
      params: ['handleClickDebugButton', 'event.target.name'],
    },
    {
      name: DomEventListenerFunctions.HandleClickCallStackItem,
      params: ['handleClickCallStackItem', 'event.target.dataset.index'],
    },
    {
      name: DomEventListenerFunctions.HandleClickScopeValue,
      params: ['handleClickScopeValue', 'event.target.dataset.name'],
    },
    {
      name: DomEventListenerFunctions.HandleInputFieldChange,
      params: ['handleInputFieldChange', 'event.target.name', 'event.target.value'],
    },
  ]
}
