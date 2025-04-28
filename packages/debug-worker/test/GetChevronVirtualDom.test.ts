import { test, expect } from '@jest/globals'
import * as GetChevronVirtualDom from '../src/parts/GetChevronVirtualDom/GetChevronVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getChevronDownVirtualDom', () => {
  const result = GetChevronVirtualDom.getChevronDownVirtualDom()
  expect(result).toEqual({
    type: VirtualDomElements.Div,
    className: 'Chevron MaskIconChevronDown ',
    childCount: 0,
  })
})

test('getChevronDownVirtualDom with extra class', () => {
  const result = GetChevronVirtualDom.getChevronDownVirtualDom('extra')
  expect(result).toEqual({
    type: VirtualDomElements.Div,
    className: 'Chevron MaskIconChevronDown extra',
    childCount: 0,
  })
})

test('getChevronRightVirtualDom', () => {
  const result = GetChevronVirtualDom.getChevronRightVirtualDom()
  expect(result).toEqual({
    type: VirtualDomElements.Div,
    className: 'Chevron MaskIconChevronRight ',
    childCount: 0,
  })
})

test('getChevronRightVirtualDom with extra class', () => {
  const result = GetChevronVirtualDom.getChevronRightVirtualDom('extra')
  expect(result).toEqual({
    type: VirtualDomElements.Div,
    className: 'Chevron MaskIconChevronRight extra',
    childCount: 0,
  })
})
