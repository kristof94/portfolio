import { Router } from 'express'
var apiKey = 'caf15914ff73a0cacd321c4ae8747727-4412457b-11b231c1'
var domain = 'sandbox1f249708837846cda014eb902ffd44e7.mailgun.org'
var mailgun = require('mailgun-js')({apiKey: apiKey, domain: domain})

const router = Router()

// Message object

router.post('/mail', function (req, res, next) {
  const email = req.body.email
  const name = req.body.name
  const text = req.body.text
  sendMail(email, name, text)
  res.sendStatus(200)
})

function sendMail (email, name, text) {
  var data = {
    from: 'From ' + name,
    to: 'kristof.dsantos@gmail.com',
    subject: 'Hello',
    text: 'From ' + email + '\n' + text
  }

  mailgun.messages().send(data, function (error, body) {
    if (error) {
      console.log(error.stack)
    }
  })
}

export default router
