import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
import { join } from 'path'

const fileToRead = join(import.meta.dirname, 'files', 'fileToRead.txt')

const read = async () => {
  try {
    if (!existsSync(fileToRead)) throw new Error('FS operation failed')

    const content = await readFile(fileToRead, { encoding: 'utf8' })
    console.log(content)
  } catch (e) {
    console.error(e.message)
  }
};

await read();