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
  await Command.execute('Run And Debug.addWatchExpression')

  // assert
  const input = Locator('#WatchExpressionInput')
  await expect(input).toBeVisible()
  // TODO input should be focused

  // act
  await input.type('1 + 1')
  await Command.execute('Run And Debug.acceptWatchExpressionEdit')

  // assert
  await expect(input).toBeHidden()
  // TODO watch expression should be visible
}
