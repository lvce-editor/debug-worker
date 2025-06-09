import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { RunAndDebugState } from '../RunAndDebugState/RunAndDebugState.ts'

export const { get, set, wrapCommand, dispose, getKeys } = ViewletRegistry.create<RunAndDebugState>()
