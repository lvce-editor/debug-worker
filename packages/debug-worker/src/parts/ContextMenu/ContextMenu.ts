import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const show = async (x: number, y: number, id: any, ...args: readonly any[]): Promise<void> => {
  await RendererWorker.showContextMenu(x, y, id, ...args)
}
