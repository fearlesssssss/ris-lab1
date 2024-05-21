import { createReadStream } from 'fs';
import { join } from 'path'

const fileToReadPath = join(import.meta.dirname, 'files', 'fileToRead.txt')

const read = async () => {
  const stream = createReadStream(fileToReadPath)
  stream.on('data', (chunk) => process.stdout.write(chunk))
};

await read();