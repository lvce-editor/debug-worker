import { test, expect } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import { getArrowNodes } from '../src/parts/GetArrowNodes/GetArrowNodes.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getArrowNodes', () => {
  expect(getArrowNodes(true)).toEqual([
    {
      childCount: 1,
      className: ClassNames.CallStackArrow,
      type: VirtualDomElements.Div,
    },
    {
      childCount: 0,
      className: 'MaskIcon MaskIconArrowRight',
      type: VirtualDomElements.Div,
    },
  ])

  expect(getArrowNodes(false)).toEqual([])
  expect(getArrowNodes(undefined)).toEqual([])
})
