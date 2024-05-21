import { existsSync } from 'fs'
import { unlink } from 'fs/promises'
import { join } from 'path'

const filePath = join(import.meta.dirname, 'files', 'fileToRemove.txt')

const remove = async () => {
  try {
    if (!existsSync(filePath)) throw new Error('FS operation failed')

    await unlink(filePath)
  } catch (e) {
    console.error(e.message)
  }
};

await remove();