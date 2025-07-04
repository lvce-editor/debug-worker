import { type Test } from '@lvce-editor/test-with-playwright'

export const name = 'sample.debug-provider-add-watch-expression'

export const test: Test = async ({ Command, FileSystem, Workspace, Extension, SideBar, Locator, expect }) => {
  // arrange
  await SideBar.open('Explorer')
  const tmpDir = await FileSystem.getTmpDir()
  await Workspace.setPath(tmpDir)
  const extensionUrl = new URL(`../fixtures/${name}`, import.meta.url).toString()
  await Extension.addWebExtension(extensionUrl)
  await SideBar.open('Run And Debug')
  const debugButtonOne = Locator('.DebugButton').nth(0)
  await expect(debugButtonOne).toHaveAttribute('title', 'Resume')
  await Command.execute('Run And Debug.handleClickSectionWatch')

  // act
  await Command.execute('Run And Debug.addWatchExpression', '')

  // assert
  const input = Locator('#WatchExpressionInput')
  await expect(input).toBeVisible()
  // TODO input should be focused

  // act
  await Command.execute('Run And Debug.handleWatchValueChange', '1 + 1')
  await Command.execute('Run And Debug.acceptWatchExpressionEdit')

  // assert
  const rows = Locator('.DebugRow')
  await expect(rows).toHaveCount(14)
  await expect(rows.nth(0)).toHaveText('Watch+↻')
  await expect(rows.nth(1)).toHaveText('1 + 1: 2×')
  await expect(rows.nth(2)).toHaveText('BreakPoints')
  await expect(rows.nth(3)).toHaveText('Scope')
  await expect(rows.nth(4)).toHaveText('Local')
  await expect(rows.nth(5)).toHaveText('this: process')
  await expect(rows.nth(6)).toHaveText('now: 1985388')
  await expect(rows.nth(7)).toHaveText('list: undefined')
  await expect(rows.nth(8)).toHaveText('ranAtLeastOneList: undefined')
  await expect(rows.nth(9)).toHaveText('Closure (getTimerCallbacks)')
  await expect(rows.nth(10)).toHaveText('Closure')
}
