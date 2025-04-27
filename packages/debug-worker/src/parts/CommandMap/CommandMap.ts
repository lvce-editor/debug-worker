import * as Create from '../Create/Create.ts'
import * as GetKeyBindings from '../GetKeyBindings/GetKeyBindings.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as Terminate from '../Terminate/Terminate.ts'

export const commandMap = {
  'RunAndDebug.create': Create.create,
  'RunAndDebug.loadContent': LoadContent.loadContent,
  'RunAndDebug.getKeyBindings': GetKeyBindings.getKeyBindings,
  'RunAndDebug.terminate': Terminate.terminate,
}
