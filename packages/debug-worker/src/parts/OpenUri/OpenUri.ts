import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const openUri = async (uri: string, rowIndex: number, columnIndex: number): Promise<void> => {
  await RendererWorker.invoke('Main.openUri', uri)
}
