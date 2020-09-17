const { writeDownloadURLS } = require('./get-download-links')
writeDownloadURLS('http://datasets.pacb.com.s3.amazonaws.com/?prefix=2014/Arabidopsis/raw')
// Run wget -P files/ -i downloadlist.txt

