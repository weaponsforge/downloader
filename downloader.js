const axios = require('axios')
const fs = require('fs')
const path = require('path')
const exec = require('child_process').exec
const parser = require('fast-xml-parser')

const readDownloadList = async () => {
  // const list = fs.readFileSync(path.join(__dirname, '/list.txt'), 'utf8')
  // const dlList = list.split('\n')

  try {
    const xml = await axios.get('http://datasets.pacb.com.s3.amazonaws.com/?prefix=2014/Arabidopsis/raw')
    const obj = parser.parse(xml.data, true)
    const cmd = `wget -c http://datasets.pacb.com.s3.amazonaws.com/${obj.ListBucketResult.Contents[0].Key}`
    console.log(`Downloading ${obj.ListBucketResult.Contents[0].Size} B\n${url}`)

    exec(cmd, (err, data) => {
      if (err) {
        console.log(`Download error: ${err.message}`)
      } else {
        console.log('DONE')
      }
    })
  } catch (err) {
    console.log(err)
  }
}

readDownloadList()