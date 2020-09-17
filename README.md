## downloader

> Download files by url.


### Requirements

The following requirements are used for this project.

1. Ubuntu 18.04
	- wget - version 1.19.4
2. NodeJS
	- version 12.18.4
	- npm version 6.14.6


## Installation

1. Clone this repository.  
`git clone https://github.com/weaponsforge/downloader.git`

2. Make the `download` script executable.  
`sudo chmod u+x download`

2. Install dependencies.  
`npm install`


## Usage

1. Obtain the **XHR link** which returns an **XML response** containing all the download links from any one of the **http://datasets.pacb.com.s3.amazonaws.com/** data sets.
	- this can be viewed from the Chrome dev tools XHR tab while loading the page.
2. Open `/src/get-download-links.js`.
	- Replace `DOWNLOAD_PAGE_XML_URL_HERE` with a target download link from **#1**.
3. Start the batch files download. 
	- Navigate to the project's root directory using the terminal
	- Run `./download`
4. Wait for all files to finish download.

@weaponsforge  
20200817