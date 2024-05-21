import { createReadStream, createWriteStream } from 'fs'
import { join } from 'path'
import { createGzip } from 'zlib'
import { pipeline } from 'stream'
import { promisify } from 'util'

const pipe = promisify(pipeline)

const srcFilePath = join(import.meta.dirname, 'files', 'fileToCompress.txt')
const archiveFilePath = join(import.meta.dirname, 'files', 'archive.gz')

async function doGZip(input, output) {
  const gzip = createGzip()
  const source = createReadStream(input)
  const dest = createWriteStream(output)
  await pipe(source, gzip, dest)
}

const compress = async () => {
  await doGZip(srcFilePath, archiveFilePath)
};

await compress();