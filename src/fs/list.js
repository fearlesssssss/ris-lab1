import { existsSync } from 'fs';
import { readdir } from 'fs/promises';
import { join } from 'path'

const dirPath = join(import.meta.dirname, 'files')

const list = async () => {
  try {
    if (!existsSync(dirPath)) throw new Error('FS operation failed')

    const files = await readdir(dirPath)
    console.log(files)
  } catch (e) {
    console.error(e.message)
  }
};

await list();