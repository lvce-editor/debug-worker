import * as Create from '../Create/Create.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import * as Dispose from '../Dispose/Dispose.ts'
import * as GetCommandIds from '../GetCommandIds/GetCommandIds.ts'
import * as GetKeyBindings from '../GetKeyBindings/GetKeyBindings.ts'
import * as HandleClickDebugButton from '../HandleClickDebugButton/HandleClickDebugButton.ts'
import * as HandlePaused from '../HandlePaused/HandlePaused.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as Render2 from '../Render2/Render2.ts'
import * as RenderActions from '../RenderActions/RenderActions.ts'
import * as RenderEventListeners from '../RenderEventListeners/RenderEventListeners.ts'
import * as WrapCommand from '../RunAndDebugStates/RunAndDebugStates.ts'
import * as Terminate from '../Terminate/Terminate.ts'

export const commandMap = {
  'RunAndDebug.create': Create.create,
  'RunAndDebug.diff2': Diff2.diff2,
  'RunAndDebug.dispose': Dispose.dispose,
  'RunAndDebug.focusNext': WrapCommand.wrapCommand(HandlePaused.focusNext),
  'RunAndDebug.focusPrevious': WrapCommand.wrapCommand(HandlePaused.focusPrevious),
  'RunAndDebug.getCommandIds': GetCommandIds.getCommandIds,
  'RunAndDebug.getKeyBindings': GetKeyBindings.getKeyBindings,
  'RunAndDebug.handleArrowDown': WrapCommand.wrapCommand(HandlePaused.handleArrowDown),
  'RunAndDebug.handleArrowLeft': WrapCommand.wrapCommand(HandlePaused.handleArrowLeft),
  'RunAndDebug.handleArrowRight': WrapCommand.wrapCommand(HandlePaused.handleArrowRight),
  'RunAndDebug.handleArrowUp': WrapCommand.wrapCommand(HandlePaused.handleArrowUp),
  'RunAndDebug.handleClickCheckBox': WrapCommand.wrapCommand(HandlePaused.handleClickCheckBox),
  'RunAndDebug.handleClickDebugButton': WrapCommand.wrapCommand(HandleClickDebugButton.handleClickDebugButton),
  'RunAndDebug.handleClickPauseOnExceptions': WrapCommand.wrapCommand(HandlePaused.handleClickPauseOnExceptions),
  'RunAndDebug.handleClickPauseOnUncaughtExceptions': WrapCommand.wrapCommand(HandlePaused.handleClickPauseOnUncaughtExceptions),
  'RunAndDebug.handleClickScopeValue': WrapCommand.wrapCommand(HandlePaused.handleClickScopeValue),
  'RunAndDebug.handleClickSectionBreakPoints': WrapCommand.wrapCommand(HandlePaused.handleClickSectionBreakPoints),
  'RunAndDebug.handleClickSectionCallstack': WrapCommand.wrapCommand(HandlePaused.handleClickSectionCallstack),
  'RunAndDebug.handleClickSectionHeading': WrapCommand.wrapCommand(HandlePaused.handleClickSectionHeading),
  'RunAndDebug.handleClickSectionScope': WrapCommand.wrapCommand(HandlePaused.handleClickSectionScope),
  'RunAndDebug.handleDebugInput': WrapCommand.wrapCommand(HandlePaused.handleDebugInput),
  'RunAndDebug.handleEvaluate': WrapCommand.wrapCommand(HandlePaused.handleEvaluate),
  'RunAndDebug.handlePaused': WrapCommand.wrapCommand(HandlePaused.handlePaused),
  'RunAndDebug.handleResumed': WrapCommand.wrapCommand(HandlePaused.handleResumed),
  'RunAndDebug.handleScriptParsed': WrapCommand.wrapCommand(HandlePaused.handleScriptParsed),
  'RunAndDebug.loadContent': WrapCommand.wrapCommand(LoadContent.loadContent),
  'RunAndDebug.pause': WrapCommand.wrapCommand(HandlePaused.pause),
  'RunAndDebug.render2': Render2.render2,
  'RunAndDebug.renderActions': RenderActions.renderActions,
  'RunAndDebug.renderEventListeners': RenderEventListeners.renderEventListeners,
  'RunAndDebug.resize': WrapCommand.wrapCommand(HandlePaused.resize),
  'RunAndDebug.resume': WrapCommand.wrapCommand(HandlePaused.resume),
  'RunAndDebug.setPauseOnExceptions': WrapCommand.wrapCommand(HandlePaused.setPauseOnExceptions),
  'RunAndDebug.stepInto': WrapCommand.wrapCommand(HandlePaused.stepInto),
  'RunAndDebug.stepOut': WrapCommand.wrapCommand(HandlePaused.stepOut),
  'RunAndDebug.stepOver': WrapCommand.wrapCommand(HandlePaused.stepOver),
  'RunAndDebug.terminate': Terminate.terminate,
  'RunAndDebug.togglePause': WrapCommand.wrapCommand(HandlePaused.togglePause),
}
