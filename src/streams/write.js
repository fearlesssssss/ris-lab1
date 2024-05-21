import { createWriteStream } from 'fs'
import { join } from 'path'

const write = async () => {
  const filePath = join(import.meta.dirname, 'files', 'fileToWrite.txt')
  const wStream = createWriteStream(filePath)

  process.stdin.pipe(wStream)
};

await write();