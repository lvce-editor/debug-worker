import { spawn } from 'node:child_process'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const serverPath = require.resolve('@lvce-editor/server/bin/server.js')
const child = spawn(process.execPath, [serverPath, '--test-path=../e2e'], { stdio: 'inherit' })

child.on('exit', (code) => {
  process.exitCode = code ?? 1
})
