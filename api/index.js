import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import csrf from 'csurf'

// Require API routes
import mail from './routes/mail'
const { Nuxt, Builder } = require('nuxt')
const config = require('../nuxt.config.js')
const nuxt = new Nuxt(config)
// Create express instnace
const app = express()
// Import API Routes
var csrfProtection = csrf({ cookie: true })
var parseForm = bodyParser.urlencoded({ extended: false })
app.use(cookieParser())
app.use(bodyParser.json()) // handle json data
app.use(parseForm) // handle URL-encoded data
app.use(csrfProtection)
app.use(mail)

app.get('/getcsrftoken', function (req, res) {
  return res.json({ csrfToken: req.csrfToken() })
})

if (config.dev) {
  new Builder(nuxt).build()
    .then(listen)
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
} else {
  listen()
}

function listen () {
  // Écouter le serveur
  // app.listen(port, '0.0.0.0')
  console.log('Le serveur écoute sur `localhost:' + '`.')
}

// Export the server middleware
export const path = '/api'
export const handler = app
