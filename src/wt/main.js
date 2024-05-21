import { Worker } from 'worker_threads'
import { cpus } from 'os'
import { join } from 'path'

const cores = cpus()
const workerPath = join(import.meta.dirname, 'worker.js')

const performCalculations = async () => {
  const datas = new Array(cores.length).fill(0).map((_, i) => 10 + i)

  const workers = new Array(cores.length).fill(0).map((_, i) => new Worker(workerPath, { workerData: datas[i] }))

  const workersDoingRealStuff = workers.map(w => {
    return new Promise((r) => {
      w.once('message', (data) => r({ status: 'resolved', data }))
      w.once('error', () => r({ status: 'error', data: null }))
    })
  })

  console.log(await Promise.all(workersDoingRealStuff))
};

await performCalculations();