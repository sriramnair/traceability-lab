const express = require('express')
const path = require('path')



var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: '37b78893b10440aea51b5486a492c7b6',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

const app = express()



// record a generic message and send it to Rollbar
rollbar.log('Hello world!')



app.use(rollbar.errorHandler())

const port = process.env.PORT || 4545

app.listen(port, () => console.log(`Take us to warp ${port}!`