import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const { dispose, get, getKeys, set, wrapCommand } = ViewletRegistry.create<RunAndDebugState>()
