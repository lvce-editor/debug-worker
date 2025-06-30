import { type Test } from '@lvce-editor/test-with-playwright'

export const name = 'sample.debug-provider-toggle-breakpoint-with-space'

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
  await Command.execute('Run And Debug.handleClickSectionBreakPoints')
  await Command.execute('Run And Debug.selectIndex', 2)

  // act
  await Command.execute('Run And Debug.handleSpace')

  // assert
  const checkBox = Locator('[name="PauseOnExceptions"]')
  await expect(checkBox).toHaveValue('on')
}
