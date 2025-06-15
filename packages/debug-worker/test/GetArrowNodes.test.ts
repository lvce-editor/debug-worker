import { test, expect } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getArrowNodes } from '../src/parts/GetArrowNodes/GetArrowNodes.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getArrowNodes', () => {
  expect(getArrowNodes(true)).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.CallStackArrow,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: 'MaskIcon MaskIconArrowRight',
      childCount: 0,
    },
  ])

  expect(getArrowNodes(false)).toEqual([])
  expect(getArrowNodes(undefined)).toEqual([])
})
