import { existsSync } from 'fs';
import { cp } from 'fs/promises'
import { join } from 'path'

const srcPath = join(import.meta.dirname, 'files')
const copyPath = join(import.meta.dirname, 'files_copy')

const copy = async () => {
  try {
    if (!existsSync(srcPath) || existsSync(copyPath)) throw new Error('FS operation failed')
    
    await cp(srcPath, copyPath, { recursive: true })
  } catch (e) {
    console.error(e.message)
  }
};

await copy();
