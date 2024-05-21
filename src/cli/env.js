const parseEnv = () => {
  const values = Object.entries(process.env).reduce(
    (arr, [ key, value ]) => {
      if (key.startsWith('MITSO_')) arr.push([ key, value ])
      return arr
    }, [])
  console.log(values.map(v => `${v[0]}=${v[1]}`))
};

parseEnv();