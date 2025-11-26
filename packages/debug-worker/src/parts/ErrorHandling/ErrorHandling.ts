import * as Rpc from '../RendererWorker/RendererWorker.ts'

export const handleError = async (error: any, notify = true, prefix = ''): Promise<void> => {
  console.error(error)
}

export const showErrorDialog = async (error: any): Promise<void> => {
  const { code } = error
  const { message } = error
  const { stack } = error
  const { name } = error
  const errorInfo = {
    code,
    message,
    stack,
    name,
  }
  await Rpc.showErrorDialog(errorInfo)
}

export const warn = (...args: readonly any[]): void => {
  console.warn(...args)
}
