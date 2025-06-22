import type { KeyBinding } from '../KeyBinding/KeyBinding.ts'
import * as KeyCode from '../KeyCode/KeyCode.ts'
import * as KeyModifier from '../KeyModifier/KeyModifier.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const getKeyBindings = (): readonly KeyBinding[] => {
  return [
    {
      key: KeyCode.Backslash | KeyModifier.CtrlCmd,
      command: 'Run And Debug.togglePause',
    },
    {
      key: KeyCode.LeftArrow,
      command: 'Run And Debug.handleArrowLeft',
      when: WhenExpression.FocusDebugRow,
    },
    {
      key: KeyCode.RightArrow,
      command: 'Run And Debug.handleArrowRight',
      when: WhenExpression.FocusDebugRow,
    },
    {
      key: KeyCode.Home,
      command: 'Run And Debug.focusFirst',
      when: WhenExpression.FocusDebugRow,
    },
    {
      key: KeyCode.End,
      command: 'Run And Debug.focusLast',
      when: WhenExpression.FocusDebugRow,
    },
    {
      key: KeyCode.UpArrow,
      command: 'Run And Debug.selectPreviousRow',
      when: WhenExpression.FocusDebugRow,
    },
    {
      key: KeyCode.DownArrow,
      command: 'Run And Debug.selectNextRow',
      when: WhenExpression.FocusDebugRow,
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.Star,
      command: 'Run And Debug.expandAll',
      when: WhenExpression.FocusDebugRow,
    },
    {
      key: KeyModifier.Alt | KeyCode.RightArrow,
      command: 'Run And Debug.expandRecursively',
      when: WhenExpression.FocusDebugRow,
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.LeftArrow,
      command: 'Run And Debug.collapseAll',
      when: WhenExpression.FocusDebugRow,
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.KeyV,
      command: 'Run And Debug.handlePaste',
      when: WhenExpression.FocusDebugRow,
    },
    {
      key: KeyModifier.CtrlCmd | KeyCode.KeyC,
      command: 'Run And Debug.handleCopy',
      when: WhenExpression.FocusDebugRow,
    },
    {
      key: KeyCode.F2,
      command: 'Run And Debug.handleRename',
      when: WhenExpression.FocusDebugRow,
    },
    {
      key: KeyCode.Delete,
      command: 'Run And Debug.handleDelete',
      when: WhenExpression.FocusDebugRow,
    },
    {
      key: KeyCode.Escape,
      command: 'Run And Debug.focusNone',
      when: WhenExpression.FocusDebugRow,
    },
    {
      key: KeyCode.Enter,
      command: 'Run And Debug.handleClickCurrent',
      when: WhenExpression.FocusDebugRow,
    },
    {
      key: KeyCode.Space,
      command: 'Run And Debug.handleSpace',
      when: WhenExpression.FocusDebugRow,
    },
    {
      key: KeyCode.Enter,
      command: 'Run And Debug.handleEnter',
      when: WhenExpression.FocusDebugRow,
    },
    {
      key: KeyCode.Escape,
      command: 'Run And Debug.cancelWatchExpressionEdit',
      when: WhenExpression.FocusDebugWatchInput,
    },
    {
      key: KeyCode.Enter,
      command: 'Run And Debug.acceptWatchExpressionEdit',
      when: WhenExpression.FocusDebugWatchInput,
    },
  ]
}
