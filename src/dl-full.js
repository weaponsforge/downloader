require('dotenv').config()
const { writeDownloadURLS } = require('./get-download-links')
writeDownloadURLS(process.env.DOWNLOAD_PAGE_XML_URL)
// Should run wget -P files/ -i downloadlist.txt
