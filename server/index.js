const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, '/../client/public/')));
// app.get('/', (req, res) => {
//   res.send('hello world!')
// })

// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '/../client/public/index.html'))
// })
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))