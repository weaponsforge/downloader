const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`listetning on http://localhost:${3000}`)
})
