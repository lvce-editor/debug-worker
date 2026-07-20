import type { DebugRow } from '../DebugRow/DebugRow.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as DebugStrings from '../DebugStrings/DebugStrings.ts'
import * as DomEventListenerFunctions from '../DomEventListenerFunctions/DomEventListenerFunctions.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as VirtualDomHelpers from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const missingDebugProviderNode: VirtualDomNode = {
  childCount: 2,
  className: 'MissingDebugProvider',
  style: 'display:flex;flex-direction:column;align-items:flex-start;gap:8px;padding:12px;white-space:normal;line-height:1.4;color:var(--TitleBarForeground);',
  type: VirtualDomElements.Div,
}

const missingDebugProviderTextNode: VirtualDomNode = {
  childCount: 1,
  className: 'MissingDebugProviderText',
  style: 'white-space:normal;',
  type: VirtualDomElements.Div,
}

export const renderMissingDebugProvider = (row: DebugRow): readonly VirtualDomNode[] => {
  return [
    missingDebugProviderNode,
    missingDebugProviderTextNode,
    VirtualDomHelpers.text(row.text),
    {
      childCount: 1,
      className: MergeClassNames.mergeClassNames('Button', 'ButtonSecondary', 'MissingDebugProviderButton'),
      onClick: DomEventListenerFunctions.HandleClickOpenExtensions,
      title: DebugStrings.openExtensions(),
      type: VirtualDomElements.Button,
    },
    VirtualDomHelpers.text(DebugStrings.openExtensions()),
  ]
}
