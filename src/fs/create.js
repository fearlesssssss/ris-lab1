import { writeFile } from 'fs/promises'
import { join } from 'path'

const create = async () => {
  try {
    await writeFile(
      join(import.meta.dirname, 'files', 'fresh.txt'),
      'I am fresh and young',
      { flag: 'wx' }
    )
  } catch (e) {
    console.error(e.code === 'EEXIST' ? 'FS operation failed' : e.message)
  }
};

await create();