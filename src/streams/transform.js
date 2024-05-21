import { Transform } from 'stream'

class ReverseTransform extends Transform {
  _transform(chunk, _, callback) {
    const reversedChunk = chunk
      .toString()
      .split('')
      .reverse()
      .join('')

    this.push(reversedChunk)

    callback()
  }
}

const transform = async () => {
  const reversedStream = new ReverseTransform()

  process.stdin.pipe(reversedStream).pipe(process.stdout)
  process.stdin.resume()
};

await transform();