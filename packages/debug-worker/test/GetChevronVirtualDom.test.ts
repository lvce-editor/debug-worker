import { test, expect } from '@jest/globals'
import * as GetChevronVirtualDom from '../src/parts/GetChevronVirtualDom/GetChevronVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getChevronDownVirtualDom', () => {
  const result = GetChevronVirtualDom.getChevronDownVirtualDom()
  expect(result).toEqual({
    childCount: 0,
    className: 'Chevron MaskIconChevronDown ',
    type: VirtualDomElements.Div,
  })
})

test('getChevronDownVirtualDom with extra class', () => {
  const result = GetChevronVirtualDom.getChevronDownVirtualDom('extra')
  expect(result).toEqual({
    childCount: 0,
    className: 'Chevron MaskIconChevronDown extra',
    type: VirtualDomElements.Div,
  })
})

test('getChevronRightVirtualDom', () => {
  const result = GetChevronVirtualDom.getChevronRightVirtualDom()
  expect(result).toEqual({
    childCount: 0,
    className: 'Chevron MaskIconChevronRight ',
    type: VirtualDomElements.Div,
  })
})

test('getChevronRightVirtualDom with extra class', () => {
  const result = GetChevronVirtualDom.getChevronRightVirtualDom('extra')
  expect(result).toEqual({
    childCount: 0,
    className: 'Chevron MaskIconChevronRight extra',
    type: VirtualDomElements.Div,
  })
})
