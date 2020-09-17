require('dotenv').config()
const { writeDownloadScript } = require('./get-download-links')
writeDownloadScript(process.env.DOWNLOAD_PAGE_XML_URL)
// Should run ./downloadlist
