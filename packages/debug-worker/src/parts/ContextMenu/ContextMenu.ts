import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const show = async (x: number, y: number, id: any, ...args: readonly any[]): Promise<void> => {
  await RendererWorker.invoke('ContextMenu.show', x, y, id)
}
