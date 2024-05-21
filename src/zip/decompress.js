import { createReadStream, createWriteStream } from 'fs'
import { join } from 'path'
import { createGunzip, createGzip } from 'zlib'
import { pipeline } from 'stream'
import { promisify } from 'util'

const pipe = promisify(pipeline)

const srcArchiveFilepath = join(import.meta.dirname, 'files', 'archive.gz')
const uncompressedFilePath = join(import.meta.dirname, 'files', 'fileToCompress.txt')

async function doGunzip(input, output) {
  const gunzip = createGunzip()
  const source = createReadStream(input)
  const dest = createWriteStream(output)
  await pipe(source, gunzip, dest)
}

const decompress = async () => {
  await doGunzip(srcArchiveFilepath, uncompressedFilePath)
};

await decompress();