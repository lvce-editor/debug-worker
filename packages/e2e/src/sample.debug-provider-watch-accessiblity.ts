import { type Test } from '@lvce-editor/test-with-playwright'

export const name = 'sample.debug-provider-add-watch-expression'

export const skip = 1

export const test: Test = async ({ Command, expect, Extension, FileSystem, Locator, SideBar, Workspace }) => {
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
  await Command.execute('Run And Debug.addWatchExpression', '')
  const input = Locator('#WatchExpressionInput')
  await expect(input).toBeVisible()
  await Command.execute('Run And Debug.handleWatchValueChange', '1 + 1')

  // act
  await Command.execute('Run And Debug.acceptWatchExpressionEdit')

  // assert
  const rows = Locator('.DebugRow')
  await expect(rows).toHaveCount(14)
  await expect(rows.nth(0)).toHaveText('Watch+↻')
  await expect(rows.nth(0)).toHaveAttribute('aria-setsize', '4')
  await expect(rows.nth(0)).toHaveAttribute('aria-posinset', '1')
  await expect(rows.nth(1)).toHaveText('1 + 1: 2×')
  // TODO
  // await expect(rows.nth(1)).toHaveAttribute('aria-setsize', '1')
  // await expect(rows.nth(1)).toHaveAttribute('aria-posinset', '1')
}
