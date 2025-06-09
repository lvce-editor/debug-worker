import * as RendererWorker from '../RendererWorker/RendererWorker.ts'

export const openUri = async (uri: string, languageId: string, rowIndex: number, columnIndex: number): Promise<void> => {
  const focus = true
  const options = {
    languageId,
  }
  await RendererWorker.invoke('Main.openUri', uri, focus, options)
}
