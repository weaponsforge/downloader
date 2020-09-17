require('dotenv').config()
const { compressedDownload } = require('./get-download-links')
compressedDownload(process.env.DOWNLOAD_PAGE_XML_URL)
