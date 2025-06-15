import { acceptWatchExpressionEdit } from '../AcceptWatchExpressionEdit/AcceptWatchExpressionEdit.ts'
import { addWatchExpression } from '../AddWatchExpression/AddWatchExpression.ts'
import { cancelWatchExpressionEdit } from '../CancelWatchExpressionEdit/CancelWatchExpressionEdit.ts'
import * as Create from '../Create/Create.ts'
import * as Debug from '../Debug/Debug.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import * as Dispose from '../Dispose/Dispose.ts'
import * as GetCommandIds from '../GetCommandIds/GetCommandIds.ts'
import * as GetHighlight from '../GetHighlight/GetHighlight.ts'
import * as GetKeyBindings from '../GetKeyBindings/GetKeyBindings.ts'
import * as HandleChange from '../HandleChange/HandleChange.ts'
import * as HandleClickCallstackItem from '../HandleClickCallstackItem/HandleClickCallstackItem.ts'
import * as HandleClickCheckBox from '../HandleClickCheckBox/HandleClickCheckBox.ts'
import * as HandleClickDebugButton from '../HandleClickDebugButton/HandleClickDebugButton.ts'
import * as HandleClickPauseOnExceptions from '../HandleClickPauseOnExceptions/HandleClickPauseOnExceptions.ts'
import * as HandleClickPauseOnUncaughtExceptions from '../HandleClickPauseOnUncaughtExceptions/HandleClickPauseOnUncaughtExceptions.ts'
import * as HandleClickSectionAction from '../HandleClickSectionAction/HandleClickSectionAction.ts'
import * as HandleClickSectionBreakPoints from '../HandleClickSectionBreakPoints/HandleClickSectionBreakPoints.ts'
import * as HandleClickSectionCallstack from '../HandleClickSectionCallstack/HandleClickSectionCallstack.ts'
import * as HandleClickSectionHeading from '../HandleClickSectionHeading/HandleClickSectionHeading.ts'
import * as HandleClickSectionScope from '../HandleClickSectionScope/HandleClickSectionScope.ts'
import * as HandleInputFieldChange from '../HandleInputFieldChange/HandleInputFieldChange.ts'
import * as HandlePaused from '../HandlePaused/HandlePaused.ts'
import * as HandleResumed from '../HandleResumed/HandleResumed.ts'
import * as HandleScriptParsed from '../HandleScriptParsed/HandleScriptParsed.ts'
import * as Initialize from '../Initialize/Initialize.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as LoadContentLater from '../LoadContentLater/LoadContentLater.ts'
import * as ReadFile from '../ReadFile/ReadFile.ts'
import * as Refresh from '../Refresh/Refresh.ts'
import { removeWatchExpression } from '../RemoveWatchExpression/RemoveWatchExpression.ts'
import * as Render2 from '../Render2/Render2.ts'
import * as RenderActions from '../RenderActions/RenderActions.ts'
import * as RenderEventListeners from '../RenderEventListeners/RenderEventListeners.ts'
import * as WrapCommand from '../RunAndDebugStates/RunAndDebugStates.ts'
import * as SaveState from '../SaveState/SaveState.ts'
import * as SetPauseOnExceptions from '../SetPauseOnExceptions/SetPauseOnExceptions.ts'
import * as Terminate from '../Terminate/Terminate.ts'

export const commandMap = {
  'Debug.paused': Debug.paused,
  'Debug.resumed': Debug.resumed,
  'Debug.scriptParsed': Debug.scriptParsed,
  'Debug.handleChange': Debug.handleChange,
  'Initialize.initialize': Initialize.initialize,
  'RunAndDebug.create': Create.create,
  'RunAndDebug.diff2': Diff2.diff2,
  'RunAndDebug.dispose': Dispose.dispose,
  'RunAndDebug.focusNext': WrapCommand.wrapCommand(HandlePaused.focusNext),
  'RunAndDebug.focusPrevious': WrapCommand.wrapCommand(HandlePaused.focusPrevious),
  'RunAndDebug.getCommandIds': GetCommandIds.getCommandIds,
  'RunAndDebug.getHighlight': GetHighlight.getHighlight,
  'RunAndDebug.getKeyBindings': GetKeyBindings.getKeyBindings,
  'RunAndDebug.handleArrowDown': WrapCommand.wrapCommand(HandlePaused.handleArrowDown),
  'RunAndDebug.handleArrowLeft': WrapCommand.wrapCommand(HandlePaused.handleArrowLeft),
  'RunAndDebug.handleArrowRight': WrapCommand.wrapCommand(HandlePaused.handleArrowRight),
  'RunAndDebug.handleArrowUp': WrapCommand.wrapCommand(HandlePaused.handleArrowUp),
  'RunAndDebug.handleClickCheckBox': WrapCommand.wrapCommand(HandleClickCheckBox.handleClickCheckBox),
  'RunAndDebug.handleClickDebugButton': WrapCommand.wrapCommand(HandleClickDebugButton.handleClickDebugButton),
  'RunAndDebug.handleClickPauseOnExceptions': WrapCommand.wrapCommand(HandleClickPauseOnExceptions.handleClickPauseOnExceptions),
  'RunAndDebug.handleClickPauseOnUncaughtExceptions': WrapCommand.wrapCommand(HandleClickPauseOnUncaughtExceptions.handleClickPauseOnUncaughtExceptions),
  'RunAndDebug.handleClickScopeValue': WrapCommand.wrapCommand(HandlePaused.handleClickScopeValue),
  'RunAndDebug.handleClickSectionAction': WrapCommand.wrapCommand(HandleClickSectionAction.handleClickSectionAction),
  'RunAndDebug.handleClickSectionBreakPoints': WrapCommand.wrapCommand(HandleClickSectionBreakPoints.handleClickSectionBreakPoints),
  'RunAndDebug.handleClickSectionCallstack': WrapCommand.wrapCommand(HandleClickSectionCallstack.handleClickSectionCallstack),
  'RunAndDebug.handleClickCallStackItem': WrapCommand.wrapCommand(HandleClickCallstackItem.handleClickCallstackItem),
  'RunAndDebug.handleClickSectionHeading': WrapCommand.wrapCommand(HandleClickSectionHeading.handleClickSectionHeading),
  'RunAndDebug.handleClickSectionScope': WrapCommand.wrapCommand(HandleClickSectionScope.handleClickSectionScope),
  'RunAndDebug.handleDebugInput': WrapCommand.wrapCommand(HandlePaused.handleDebugInput),
  'RunAndDebug.handleEvaluate': WrapCommand.wrapCommand(HandlePaused.handleEvaluate),
  // eslint-disable-next-line  @typescript-eslint/no-deprecated
  'RunAndDebug.handlePaused': WrapCommand.wrapCommand(HandlePaused.handlePaused),
  'RunAndDebug.addWatchExpression': WrapCommand.wrapCommand(addWatchExpression),
  'RunAndDebug.cancelWatchExpressionEdit': WrapCommand.wrapCommand(cancelWatchExpressionEdit),
  'RunAndDebug.acceptWatchExpressionEdit': WrapCommand.wrapCommand(acceptWatchExpressionEdit),
  'RunAndDebug.handleChange': WrapCommand.wrapCommand(HandleChange.handleChange),
  'RunAndDebug.handleInputFieldChange': WrapCommand.wrapCommand(HandleInputFieldChange.handleInputFieldChange),
  'RunAndDebug.handleResumed': WrapCommand.wrapCommand(HandleResumed.handleResumed),
  'RunAndDebug.handleScriptParsed': WrapCommand.wrapCommand(HandleScriptParsed.handleScriptParsed),
  'RunAndDebug.loadContent': WrapCommand.wrapCommand(LoadContent.loadContent),
  'RunAndDebug.loadContentLater': WrapCommand.wrapCommand(LoadContentLater.loadContentLater),
  'RunAndDebug.pause': WrapCommand.wrapCommand(HandlePaused.pause),
  'RunAndDebug.readFile': ReadFile.readFile,
  'RunAndDebug.refresh': WrapCommand.wrapCommand(Refresh.refresh),
  'RunAndDebug.removeWatchExpression': removeWatchExpression,
  'RunAndDebug.render2': Render2.render2,
  'RunAndDebug.renderActions': RenderActions.renderActions,
  'RunAndDebug.renderEventListeners': RenderEventListeners.renderEventListeners,
  'RunAndDebug.resize': WrapCommand.wrapCommand(HandlePaused.resize),
  'RunAndDebug.resume': WrapCommand.wrapCommand(HandlePaused.resume),
  'RunAndDebug.saveState': SaveState.saveState,
  'RunAndDebug.setPauseOnExceptions': WrapCommand.wrapCommand(SetPauseOnExceptions.setPauseOnExceptions),
  'RunAndDebug.stepInto': WrapCommand.wrapCommand(HandlePaused.stepInto),
  'RunAndDebug.stepOut': WrapCommand.wrapCommand(HandlePaused.stepOut),
  'RunAndDebug.stepOver': WrapCommand.wrapCommand(HandlePaused.stepOver),
  'RunAndDebug.terminate': Terminate.terminate,
  'RunAndDebug.togglePause': WrapCommand.wrapCommand(HandlePaused.togglePause),
}
