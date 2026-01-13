import { KeyCode, KeyModifier } from '@lvce-editor/virtual-dom-worker'
import type { KeyBinding } from '../KeyBinding/KeyBinding.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const getKeyBindings = (): readonly KeyBinding[] => {
  return [
    {
      command: 'Run And Debug.togglePause',
      key: KeyCode.Backslash | KeyModifier.CtrlCmd,
    },
    {
      command: 'Run And Debug.handleArrowLeft',
      key: KeyCode.LeftArrow,
      when: WhenExpression.FocusDebugRow,
    },
    {
      command: 'Run And Debug.handleArrowRight',
      key: KeyCode.RightArrow,
      when: WhenExpression.FocusDebugRow,
    },
    {
      command: 'Run And Debug.focusFirst',
      key: KeyCode.Home,
      when: WhenExpression.FocusDebugRow,
    },
    {
      command: 'Run And Debug.focusLast',
      key: KeyCode.End,
      when: WhenExpression.FocusDebugRow,
    },
    {
      command: 'Run And Debug.selectPreviousRow',
      key: KeyCode.UpArrow,
      when: WhenExpression.FocusDebugRow,
    },
    {
      command: 'Run And Debug.selectNextRow',
      key: KeyCode.DownArrow,
      when: WhenExpression.FocusDebugRow,
    },
    {
      command: 'Run And Debug.expandAll',
      key: KeyModifier.CtrlCmd | KeyCode.Star,
      when: WhenExpression.FocusDebugRow,
    },
    {
      command: 'Run And Debug.expandRecursively',
      key: KeyModifier.Alt | KeyCode.RightArrow,
      when: WhenExpression.FocusDebugRow,
    },
    {
      command: 'Run And Debug.collapseAll',
      key: KeyModifier.CtrlCmd | KeyCode.LeftArrow,
      when: WhenExpression.FocusDebugRow,
    },
    {
      command: 'Run And Debug.handlePaste',
      key: KeyModifier.CtrlCmd | KeyCode.KeyV,
      when: WhenExpression.FocusDebugRow,
    },
    {
      command: 'Run And Debug.handleCopy',
      key: KeyModifier.CtrlCmd | KeyCode.KeyC,
      when: WhenExpression.FocusDebugRow,
    },
    {
      command: 'Run And Debug.handleNew',
      key: KeyModifier.CtrlCmd | KeyCode.KeyN,
      when: WhenExpression.FocusDebugRow,
    },
    {
      command: 'Run And Debug.handleRename',
      key: KeyCode.F2,
      when: WhenExpression.FocusDebugRow,
    },
    {
      command: 'Run And Debug.handleDelete',
      key: KeyCode.Delete,
      when: WhenExpression.FocusDebugRow,
    },
    {
      command: 'Run And Debug.focusNone',
      key: KeyCode.Escape,
      when: WhenExpression.FocusDebugRow,
    },
    {
      command: 'Run And Debug.handleClickCurrent',
      key: KeyCode.Enter,
      when: WhenExpression.FocusDebugRow,
    },
    {
      command: 'Run And Debug.handleSpace',
      key: KeyCode.Space,
      when: WhenExpression.FocusDebugRow,
    },
    {
      command: 'Run And Debug.handleEnter',
      key: KeyCode.Enter,
      when: WhenExpression.FocusDebugRow,
    },
    {
      command: 'Run And Debug.cancelWatchExpressionEdit',
      key: KeyCode.Escape,
      when: WhenExpression.FocusDebugWatchInput,
    },
    {
      command: 'Run And Debug.acceptWatchExpressionEdit',
      key: KeyCode.Enter,
      when: WhenExpression.FocusDebugWatchInput,
    },
    {
      command: 'Run And Debug.selectFirstIndex',
      key: KeyModifier.CtrlCmd | KeyCode.Home,
      when: WhenExpression.FocusDebugRow,
    },
    {
      command: 'Run And Debug.selectLastIndex',
      key: KeyModifier.CtrlCmd | KeyCode.End,
      when: WhenExpression.FocusDebugRow,
    },
  ]
}
