import { expect, test } from '@jest/globals'
import type { DebugRow } from '../src/parts/DebugRow/DebugRow.ts'
import * as DebugRowType from '../src/parts/DebugRowType/DebugRowType.ts'
import * as DebugStrings from '../src/parts/DebugStrings/DebugStrings.ts'
import * as DomEventListenerFunctions from '../src/parts/DomEventListenerFunctions/DomEventListenerFunctions.ts'
import { renderMissingDebugProvider } from '../src/parts/RenderMissingDebugProvider/RenderMissingDebugProvider.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../src/parts/VirtualDomHelpers/VirtualDomHelpers.ts'

test('renderMissingDebugProvider', () => {
  const row: DebugRow = {
    description: '',
    expanded: false,
    indent: 0,
    index: 0,
    key: 'missing-debug-provider',
    name: '',
    posInset: 1,
    setSize: 1,
    text: 'No debug provider "node-debug" found.',
    type: DebugRowType.MissingDebugProvider,
    value: '',
    valueType: '',
  }

  const result = renderMissingDebugProvider(row)

  expect(result).toEqual([
    {
      childCount: 2,
      className: 'MissingDebugProvider',
      style: 'display:flex;flex-direction:column;align-items:flex-start;gap:8px;padding:12px;white-space:normal;line-height:1.4;color:var(--TitleBarForeground);',
      type: VirtualDomElements.Div,
    },
    {
      childCount: 1,
      className: 'MissingDebugProviderText',
      style: 'white-space:normal;',
      type: VirtualDomElements.Div,
    },
    VirtualDomHelpers.text('No debug provider "node-debug" found.'),
    {
      childCount: 1,
      className: 'Button ButtonSecondary MissingDebugProviderButton',
      onClick: DomEventListenerFunctions.HandleClickOpenExtensions,
      title: DebugStrings.openExtensions(),
      type: VirtualDomElements.Button,
    },
    VirtualDomHelpers.text(DebugStrings.openExtensions()),
  ])
})
