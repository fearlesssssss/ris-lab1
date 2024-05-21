import { fork } from 'child_process'
import { join } from 'path';

const scriptPath = join(import.meta.dirname, 'files', 'script.js')

const spawnChildProcess = async (args) => {
    fork(scriptPath, args)
};

// Put your arguments in function call to test this functionality
spawnChildProcess([ 'xd', 'mduh', 'sadge' ]);
