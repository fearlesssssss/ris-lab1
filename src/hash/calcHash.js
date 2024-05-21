import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { join } from 'path'

const filePath = join(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt')

const calculateHash = async () => {
  const fileContent = await readFile(filePath)
  const hash = createHash('sha256').update(fileContent).digest('hex')

  console.log('SHA256 hash of %s is: %s', filePath, hash)
};

await calculateHash();