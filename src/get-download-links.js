const axios = require('axios')
const fs = require('fs')
const path = require('path')
const exec = require('child_process').exec
const parser = require('fast-xml-parser')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const { document } = (new JSDOM()).window

const execDownload = (cmd) => {
  exec(cmd, (err, data) => {
    if (err) {
      console.log(`Download error: ${err.message}`)
    } else {
      console.log('DONE')
    }
  })
}

/**
 * Return a list of download urls in newline-delimited strings from datasets in
 * http://datasets.pacb.com.s3.amazonaws.com
 * @param {String} downloadUrl
 * @returns {String} download urls
 */
const getDownloadURLS = async (downloadUrl) => {
  let urls = ''
  const a = document.createElement('a')
  a.href = downloadUrl
  const baseUrl = `${a.protocol}//${a.hostname}`

  try {
    const xml = await axios.get(downloadUrl)
    const obj = parser.parse(xml.data, true)

    obj.ListBucketResult.Contents.forEach(item => {
      urls += `${baseUrl}/${item.Key}\n`
    })
  } catch (err) {
    console.log(err)
  }

  return urls
}

/**
 * Write the download URL's from http://datasets.pacb.com.s3.amazonaws.com data sets to a text file
 * @param {String} downloadUrl URL that returns an XML response of download links from 
 * http://datasets.pacb.com.s3.amazonaws.com data sets
 */
const readDownloadList = async (downloadUrl) => {
  const filePath = path.join(__dirname, '..', '/downloadlist.txt')
  const downloadList = await getDownloadURLS(downloadUrl)

  try {
    fs.writeFile(filePath, downloadList, (err) => {
      if (err) console.log(`Error: ${err.message}`)
      console.log(`Download links written on\n${path.resolve(__dirname, '..', 'downloadlist.txt')}\n`)
    })
  } catch (err) {
    console.log(err.message)
  }
}

readDownloadList('http://datasets.pacb.com.s3.amazonaws.com/?prefix=2014/Arabidopsis/raw')