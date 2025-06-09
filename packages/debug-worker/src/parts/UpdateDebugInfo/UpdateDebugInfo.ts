import * as EditorWorker from '../EditorWorker/EditorWorker.ts'

export const updateDebugInfo = async (key: any): Promise<void> => {
  // @ts-ignore
  await EditorWorker.invoke('Editor.updateDebugInfo', key)
}
