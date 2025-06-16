import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'sample.debug-provider-add-watch-expression'

export const test: Test = async ({ FileSystem, Workspace, Extension, SideBar, Locator, expect }) => {
  // arrange
  await SideBar.open('Explorer')
  const tmpDir = await FileSystem.getTmpDir()
  await Workspace.setPath(tmpDir)
  const extensionUrl = new URL(`../fixtures/${name}`, import.meta.url).toString()
  await Extension.addWebExtension(extensionUrl)
  await SideBar.open('Run And Debug')
  const debugButtonOne = Locator('.DebugButton').nth(0)
  await expect(debugButtonOne).toHaveAttribute('title', 'Resume')

  // act
  // TODO click watch expression button
  // TODO type in input field
  // TODO accept edit
  // TODO verify watch expression appears

  // assert
}
