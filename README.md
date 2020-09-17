## downloader

> Download files by url.


### Requirements

The following requirements are used for this project.

1. Ubuntu 18.04 (or other Linux OS)
	- wget - version 1.19.4
2. NodeJS
	- version 12.18.4
	- npm version 6.14.6


## Installation

1. Clone this repository.  
`git clone https://github.com/weaponsforge/downloader.git`
2. Install dependencies.  
`npm install`
3. Make the download bash scripts executable.  
	- `sudo chmod u+x download-full`
	- `sudo chmod u+x download-compressed`
4. Source out the `.env.example` file into a `.env` file.
	- Open the `.env` file.
	- Replace `DOWNLOAD_PAGE_XML_URL` with your target **http://datasets.pacb.com.s3.amazonaws.com/** data set page's **XML** download URL, which contains the full list of file download URLS in XML format.
		- this can be viewed from the Chrome dev tools XHR tab while loading the page.

## Usage

- Download all files in a compressed format. Run any of the (2) commands:
	- `npm run download-compressed`
	- `./download-compressed`
- Download all files in raw, uncompressed format. Run any of the (2) commands:
	- `npm run download-full`
	- `./download-full`

## Available Scripts

### npm download-compressed

- Downloads all data set files in a compressed `.gz` format.
- Downloaded files are stored in the `/downloader/files` directory.
- Also available as a bash script `./download-compressed`

### npm download-full

- Downloads all data set files in their raw format.
- Downloaded files are stored in the `/downloader/files` directory.
- Also available as a bash script `./download-full`

### fetch-download-urls

Download the list of file download URLS into a `downloadlist.txt` file.

### start

Starts a local web server on `http://localhost:3000` for testing purposes.


@weaponsforge  
20200817