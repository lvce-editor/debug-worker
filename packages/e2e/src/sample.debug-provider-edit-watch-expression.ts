import { type Test } from '@lvce-editor/test-with-playwright'

export const name = 'sample.debug-provider-edit-watch-expression'

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
  await Command.execute('Run And Debug.addWatchExpression', '')
  await Command.execute('Run And Debug.handleWatchValueChange', '1 + 1')
  await Command.execute('Run And Debug.acceptWatchExpressionEdit')
  await Command.execute('Run And Debug.selectIndex', 1)
  const rows = Locator('.DebugRow')
  await expect(rows.nth(0)).toHaveText('1 + 1: 2×')

  // act
  await Command.execute('Run And Debug.handleRename')

  // assert
  const input = Locator('#WatchExpressionInput')
  await expect(input).toBeVisible()
  await expect(input).toBeFocused()
  await expect(input).toBeFocused()

  // act
  await Command.execute('Run And Debug.handleWatchValueChange', '2 + 2')
  await Command.execute('Run And Debug.acceptWatchExpressionEdit')

  // assert
  await expect(rows.nth(0)).toHaveText('2 + 2: 4×')
}
