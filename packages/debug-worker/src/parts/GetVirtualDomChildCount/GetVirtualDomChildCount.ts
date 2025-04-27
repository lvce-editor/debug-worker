import type { VirtualDomNode } from '@lvce-editor/virtual-dom-worker'

export const getVirtualDomChildCount = (markdownDom: readonly VirtualDomNode[]): number => {
  const max = markdownDom.length - 1
  let stack: VirtualDomNode[] = []
  for (let i = max; i >= 0; i--) {
    const element = markdownDom[i]
    if (element.childCount > 0) {
      stack = stack.slice(element.childCount)
    }
    stack.unshift(element)
  }
  return stack.length
}
