import { acceptWatchExpressionEdit } from '../AcceptWatchExpressionEdit/AcceptWatchExpressionEdit.ts'
import { addWatchExpression } from '../AddWatchExpression/AddWatchExpression.ts'
import { cancelWatchExpressionEdit } from '../CancelWatchExpressionEdit/CancelWatchExpressionEdit.ts'
import * as Create from '../Create/Create.ts'
import * as Debug from '../Debug/Debug.ts'
import { deleteAllWatchExpressions } from '../DeleteAllWatchExpressions/DeleteAllWatchExpressions.ts'
import { deleteWatchExpression } from '../DeleteWatchExpression/DeleteWatchExpression.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import * as Dispose from '../Dispose/Dispose.ts'
import * as GetCommandIds from '../GetCommandIds/GetCommandIds.ts'
import * as GetHighlight from '../GetHighlight/GetHighlight.ts'
import * as GetKeyBindings from '../GetKeyBindings/GetKeyBindings.ts'
import * as GetMenuEntries from '../GetMenuEntries/GetMenuEntries.ts'
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
import * as HandleClickSectionWatch from '../HandleClickSectionWatch/HandleClickSectionWatch.ts'
import * as HandleClickWatchExpression from '../HandleClickWatchExpression/HandleClickWatchExpression.ts'
import * as HandleClickWatchExpressionDelete from '../HandleClickWatchExpressionDelete/HandleClickWatchExpressionDelete.ts'
import { handleWatchExpressionDoubleClick } from '../HandleClickWatchExpressionDoubleClick/HandleClickWatchExpressionDoubleClick.ts'
import * as HandleInputBlur from '../HandleInputBlur/HandleInputBlur.ts'
import * as HandleInputFieldChange from '../HandleInputFieldChange/HandleInputFieldChange.ts'
import * as HandlePaused from '../HandlePaused/HandlePaused.ts'
import * as HandleResumed from '../HandleResumed/HandleResumed.ts'
import * as HandleScriptParsed from '../HandleScriptParsed/HandleScriptParsed.ts'
import * as HandleSectionHeaderContextMenu from '../HandleSectionHeaderContextMenu/HandleSectionHeaderContextMenu.ts'
import * as HandleWatchExpressionContextMenu from '../HandleWatchExpressionContextMenu/HandleWatchExpressionContextMenu.ts'
import * as HandleWatchValueChange from '../HandleWatchValueChange/HandleWatchValueChange.ts'
import { hideCallStack } from '../HideCallStack/HideCallStack.ts'
import { hideScope } from '../HideScope/HideScope.ts'
import { hideWatch } from '../HideWatch/HideWatch.ts'
import * as Initialize from '../Initialize/Initialize.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as LoadContentLater from '../LoadContentLater/LoadContentLater.ts'
import * as ReadFile from '../ReadFile/ReadFile.ts'
import * as Refresh from '../Refresh/Refresh.ts'
import { refreshWatchExpression } from '../RefreshWatchExpression/RefreshWatchExpression.ts'
import { removeWatchExpression } from '../RemoveWatchExpression/RemoveWatchExpression.ts'
import * as Render2 from '../Render2/Render2.ts'
import * as RenderActions from '../RenderActions/RenderActions.ts'
import * as RenderEventListeners from '../RenderEventListeners/RenderEventListeners.ts'
import * as RestoreState from '../RestoreState/RestoreState.ts'
import * as WrapCommand from '../RunAndDebugStates/RunAndDebugStates.ts'
import * as SaveState from '../SaveState/SaveState.ts'
import { selectIndex } from '../SelectIndex/SelectIndex.ts'
import { selectNextRow } from '../SelectNextRow/SelectNextRow.ts'
import { selectPreviousRow } from '../SelectPreviousRow/SelectPreviousRow.ts'
import * as SetPauseOnExceptions from '../SetPauseOnExceptions/SetPauseOnExceptions.ts'
import { showCallStack } from '../ShowCallStack/ShowCallStack.ts'
import { showScope } from '../ShowScope/ShowScope.ts'
import { showWatch } from '../ShowWatch/ShowWatch.ts'
import * as Terminate from '../Terminate/Terminate.ts'

export const commandMap = {
  'Debug.handleChange': Debug.handleChange,
  'Debug.paused': Debug.paused,
  'Debug.resumed': Debug.resumed,
  'Debug.scriptParsed': Debug.scriptParsed,
  'Initialize.initialize': Initialize.initialize,
  'RunAndDebug.acceptWatchExpressionEdit': WrapCommand.wrapCommand(acceptWatchExpressionEdit),
  'RunAndDebug.addWatchExpression': WrapCommand.wrapCommand(addWatchExpression),
  'RunAndDebug.cancelWatchExpressionEdit': WrapCommand.wrapCommand(cancelWatchExpressionEdit),
  'RunAndDebug.create': Create.create,
  'RunAndDebug.deleteWatchExpression': deleteWatchExpression,
  'RunAndDebug.deleteAllWatchExpressions': deleteAllWatchExpressions,
  'RunAndDebug.diff2': Diff2.diff2,
  'RunAndDebug.dispose': Dispose.dispose,
  'RunAndDebug.focusNext': WrapCommand.wrapCommand(HandlePaused.focusNext),
  'RunAndDebug.focusPrevious': WrapCommand.wrapCommand(HandlePaused.focusPrevious),
  'RunAndDebug.getCommandIds': GetCommandIds.getCommandIds,
  'RunAndDebug.getHighlight': GetHighlight.getHighlight,
  'RunAndDebug.getKeyBindings': GetKeyBindings.getKeyBindings,
  'RunAndDebug.getMenuEntries': GetMenuEntries.getMenuEntries,
  'RunAndDebug.handleArrowDown': WrapCommand.wrapCommand(HandlePaused.handleArrowDown),
  'RunAndDebug.handleArrowLeft': WrapCommand.wrapCommand(HandlePaused.handleArrowLeft),
  'RunAndDebug.handleArrowRight': WrapCommand.wrapCommand(HandlePaused.handleArrowRight),
  'RunAndDebug.handleArrowUp': WrapCommand.wrapCommand(HandlePaused.handleArrowUp),
  'RunAndDebug.handleChange': WrapCommand.wrapCommand(HandleChange.handleChange),
  'RunAndDebug.handleClickCallStackItem': WrapCommand.wrapCommand(HandleClickCallstackItem.handleClickCallstackItem),
  'RunAndDebug.handleClickCheckBox': WrapCommand.wrapCommand(HandleClickCheckBox.handleClickCheckBox),
  'RunAndDebug.handleClickDebugButton': WrapCommand.wrapCommand(HandleClickDebugButton.handleClickDebugButton),
  'RunAndDebug.handleClickPauseOnExceptions': WrapCommand.wrapCommand(HandleClickPauseOnExceptions.handleClickPauseOnExceptions),
  'RunAndDebug.handleClickPauseOnUncaughtExceptions': WrapCommand.wrapCommand(HandleClickPauseOnUncaughtExceptions.handleClickPauseOnUncaughtExceptions),
  'RunAndDebug.handleClickScopeValue': WrapCommand.wrapCommand(HandlePaused.handleClickScopeValue),
  'RunAndDebug.handleClickSectionAction': WrapCommand.wrapCommand(HandleClickSectionAction.handleClickSectionAction),
  'RunAndDebug.handleClickSectionBreakPoints': WrapCommand.wrapCommand(HandleClickSectionBreakPoints.handleClickSectionBreakPoints),
  'RunAndDebug.handleClickSectionCallstack': WrapCommand.wrapCommand(HandleClickSectionCallstack.handleClickSectionCallstack),
  'RunAndDebug.handleClickSectionHeading': WrapCommand.wrapCommand(HandleClickSectionHeading.handleClickSectionHeading),
  'RunAndDebug.handleClickSectionScope': WrapCommand.wrapCommand(HandleClickSectionScope.handleClickSectionScope),
  'RunAndDebug.handleClickSectionWatch': WrapCommand.wrapCommand(HandleClickSectionWatch.handleClickSectionWatch),
  'RunAndDebug.handleClickWatchExpression': WrapCommand.wrapCommand(HandleClickWatchExpression.handleClickWatchExpression),
  'RunAndDebug.handleClickWatchExpressionDelete': WrapCommand.wrapCommand(HandleClickWatchExpressionDelete.handleClickWatchExpressionDelete),
  'RunAndDebug.handleDebugInput': WrapCommand.wrapCommand(HandlePaused.handleDebugInput),
  'RunAndDebug.handleEvaluate': WrapCommand.wrapCommand(HandlePaused.handleEvaluate),
  'RunAndDebug.handleInputBlur': WrapCommand.wrapCommand(HandleInputBlur.handleInputBlur),
  'RunAndDebug.handleInputFieldChange': WrapCommand.wrapCommand(HandleInputFieldChange.handleInputFieldChange),
  // eslint-disable-next-line  @typescript-eslint/no-deprecated
  'RunAndDebug.handlePaused': WrapCommand.wrapCommand(HandlePaused.handlePaused),
  'RunAndDebug.handleResumed': WrapCommand.wrapCommand(HandleResumed.handleResumed),
  'RunAndDebug.handleScriptParsed': WrapCommand.wrapCommand(HandleScriptParsed.handleScriptParsed),
  'RunAndDebug.handleSectionHeaderContextMenu': WrapCommand.wrapCommand(HandleSectionHeaderContextMenu.handleSectionHeaderContextMenu),
  'RunAndDebug.handleWatchExpressionContextMenu': WrapCommand.wrapCommand(HandleWatchExpressionContextMenu.handleWatchExpressionContextMenu),
  'RunAndDebug.handleWatchExpressionDoubleClick': WrapCommand.wrapCommand(handleWatchExpressionDoubleClick),
  'RunAndDebug.handleWatchValueChange': WrapCommand.wrapCommand(HandleWatchValueChange.handleWatchValueChange),
  'RunAndDebug.loadContent': WrapCommand.wrapCommand(LoadContent.loadContent),
  'RunAndDebug.loadContentLater': WrapCommand.wrapCommand(LoadContentLater.loadContentLater),
  'RunAndDebug.pause': WrapCommand.wrapCommand(HandlePaused.pause),
  'RunAndDebug.readFile': ReadFile.readFile,
  'RunAndDebug.refresh': WrapCommand.wrapCommand(Refresh.refresh),
  'RunAndDebug.refreshWatchExpression': WrapCommand.wrapCommand(refreshWatchExpression),
  'RunAndDebug.removeWatchExpression': removeWatchExpression,
  'RunAndDebug.render2': Render2.render2,
  'RunAndDebug.renderActions': RenderActions.renderActions,
  'RunAndDebug.renderEventListeners': RenderEventListeners.renderEventListeners,
  'RunAndDebug.resize': WrapCommand.wrapCommand(HandlePaused.resize),
  'RunAndDebug.restoreState': RestoreState.restoreState,
  'RunAndDebug.resume': WrapCommand.wrapCommand(HandlePaused.resume),
  'RunAndDebug.saveState': SaveState.saveState,
  'RunAndDebug.selectIndex': WrapCommand.wrapCommand(selectIndex),
  'RunAndDebug.selectNextRow': WrapCommand.wrapCommand(selectNextRow),
  'RunAndDebug.selectPreviousRow': WrapCommand.wrapCommand(selectPreviousRow),
  'RunAndDebug.setPauseOnExceptions': WrapCommand.wrapCommand(SetPauseOnExceptions.setPauseOnExceptions),
  'RunAndDebug.stepInto': WrapCommand.wrapCommand(HandlePaused.stepInto),
  'RunAndDebug.stepOut': WrapCommand.wrapCommand(HandlePaused.stepOut),
  'RunAndDebug.stepOver': WrapCommand.wrapCommand(HandlePaused.stepOver),
  'RunAndDebug.terminate': Terminate.terminate,
  'RunAndDebug.togglePause': WrapCommand.wrapCommand(HandlePaused.togglePause),
  'RunAndDebug.showWatch': WrapCommand.wrapCommand(showWatch),
  'RunAndDebug.hideWatch': WrapCommand.wrapCommand(hideWatch),
  'RunAndDebug.showScope': WrapCommand.wrapCommand(showScope),
  'RunAndDebug.hideScope': WrapCommand.wrapCommand(hideScope),
  'RunAndDebug.showCallStack': WrapCommand.wrapCommand(showCallStack),
  'RunAndDebug.hideCallStack': WrapCommand.wrapCommand(hideCallStack),
}
