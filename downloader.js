const fs = require('fs')
const path = require('path')
const exec = require('child_process').exec

const readDownloadList = () => {
  const list = fs.readFileSync(path.join(__dirname, '/list.txt'), 'utf8')
  console.log(list)
  const dlList = list.split('\n')
  console.log(dlList)

  for (let i=0; i < dlList.length; i += 1) {
    const cmd = `wget -c ${dlList[i]}`
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        console.log(`error: ${err}`)
      } else {
        console.log(`out: ${stdout}`)
        console.log(`stderr: ${stderr}`)
      }
    })
  }
}

readDownloadList()