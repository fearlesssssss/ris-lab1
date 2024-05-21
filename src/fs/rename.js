import { existsSync } from 'fs'
import { rename as fsRename } from 'fs/promises'
import { join } from 'path'

const srcFile = join(import.meta.dirname, 'files', 'wrongFilename.txt')
const newFilename = 'properFilename.md'
const newFilenamePath = join(srcFile, '..', newFilename)

const rename = async () => {
  try {
    if (existsSync(newFilenamePath) || !existsSync(srcFile))
      throw new Error('FS operation failed')

    await fsRename(srcFile, newFilenamePath)
  } catch (e) {
    console.error(e.message)
  }
};

await rename();