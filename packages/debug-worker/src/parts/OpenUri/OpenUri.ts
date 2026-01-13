import { RendererWorker } from '@lvce-editor/rpc-registry'
export const openUri = async (uri: string, languageId: string, rowIndex: number, columnIndex: number): Promise<void> => {
  const focus = true
  const options = {
    columnIndex,
    languageId,
    rowIndex,
  }
  await RendererWorker.openUri(uri, focus, options)
}
