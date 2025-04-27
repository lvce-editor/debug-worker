import * as Create from '../Create/Create.ts'
import * as GetKeyBindings from '../GetKeyBindings/GetKeyBindings.ts'
import * as HandlePaused from '../HandlePaused/HandlePaused.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as WrapCommand from '../RunAndDebugStates/RunAndDebugStates.ts'
import * as Terminate from '../Terminate/Terminate.ts'

export const commandMap = {
  'RunAndDebug.create': Create.create,
  'RunAndDebug.loadContent': LoadContent.loadContent,
  'RunAndDebug.getKeyBindings': GetKeyBindings.getKeyBindings,
  'RunAndDebug.terminate': Terminate.terminate,
  'RunAndDebug.handlePaused': WrapCommand.wrapCommand(HandlePaused.handlePaused),
  'RunAndDebug.handleResumed': WrapCommand.wrapCommand(HandlePaused.handleResumed),
  'RunAndDebug.handleScriptParsed': WrapCommand.wrapCommand(HandlePaused.handleScriptParsed),
  'RunAndDebug.handleClickScopeValue': WrapCommand.wrapCommand(HandlePaused.handleClickScopeValue),
  'RunAndDebug.resume': WrapCommand.wrapCommand(HandlePaused.resume),
  'RunAndDebug.pause': WrapCommand.wrapCommand(HandlePaused.pause),
  'RunAndDebug.togglePause': WrapCommand.wrapCommand(HandlePaused.togglePause),
  'RunAndDebug.stepOver': WrapCommand.wrapCommand(HandlePaused.stepOver),
  'RunAndDebug.stepInto': WrapCommand.wrapCommand(HandlePaused.stepInto),
  'RunAndDebug.stepOut': WrapCommand.wrapCommand(HandlePaused.stepOut),
  'RunAndDebug.handleClickSectionBreakPoints': WrapCommand.wrapCommand(HandlePaused.handleClickSectionBreakPoints),
  'RunAndDebug.handleClickSectionScope': WrapCommand.wrapCommand(HandlePaused.handleClickSectionScope),
  'RunAndDebug.handleClickSectionCallstack': WrapCommand.wrapCommand(HandlePaused.handleClickSectionCallstack),
  'RunAndDebug.handleClickSectionHeading': WrapCommand.wrapCommand(HandlePaused.handleClickSectionHeading),
  'RunAndDebug.handleDebugInput': WrapCommand.wrapCommand(HandlePaused.handleDebugInput),
  'RunAndDebug.handleEvaluate': WrapCommand.wrapCommand(HandlePaused.handleEvaluate),
  'RunAndDebug.handleArrowLeft': WrapCommand.wrapCommand(HandlePaused.handleArrowLeft),
  'RunAndDebug.handleArrowRight': WrapCommand.wrapCommand(HandlePaused.handleArrowRight),
  'RunAndDebug.handleArrowUp': WrapCommand.wrapCommand(HandlePaused.handleArrowUp),
  'RunAndDebug.handleArrowDown': WrapCommand.wrapCommand(HandlePaused.handleArrowDown),
  'RunAndDebug.focusPrevious': WrapCommand.wrapCommand(HandlePaused.focusPrevious),
  'RunAndDebug.focusNext': WrapCommand.wrapCommand(HandlePaused.focusNext),
  'RunAndDebug.setPauseOnExceptions': WrapCommand.wrapCommand(HandlePaused.setPauseOnExceptions),
  'RunAndDebug.handleClickPauseOnExceptions': WrapCommand.wrapCommand(HandlePaused.handleClickPauseOnExceptions),
  'RunAndDebug.handleClickPauseOnUncaughtExceptions': WrapCommand.wrapCommand(HandlePaused.handleClickPauseOnUncaughtExceptions),
  'RunAndDebug.handleClickCheckBox': WrapCommand.wrapCommand(HandlePaused.handleClickCheckBox),
  'RunAndDebug.dispose': WrapCommand.wrapCommand(HandlePaused.dispose),
  'RunAndDebug.resize': WrapCommand.wrapCommand(HandlePaused.resize),
}
