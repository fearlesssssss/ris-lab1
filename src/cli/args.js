const parseArgs = () => {
    const rawArgs = process.argv.slice(2)
    const args = rawArgs.join(' ').matchAll(/--(\S+)\s+([^ ]+)/g)
    
    for (const rawFlag of args) {
        const [, flag, value] = rawFlag
        console.log(`${flag} is ${value}`)
    }
};

parseArgs();