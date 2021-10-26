const express = require('express')
const path = require('path')



let Rollbar = require('rollbar')
let rollbar = new Rollbar({
  accessToken: '37b78893b10440aea51b5486a492c7b6',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully')
})

const app = express()



// record a generic message and send it to Rollbar
rollbar.log('Hello world!')


app.use(express.json())
app.use(rollbar.errorHandler())

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Take us to warp ${port}!`))