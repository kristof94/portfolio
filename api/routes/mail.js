import { Router } from 'express'
import nodemailer from 'nodemailer'

const router = Router()

// Create a SMTP transport object
var transport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'kristof.dsantos@gmail.com',
    pass: 'direct22'
  }
})

console.log('SMTP Configured')

// Message object

router.post('/mail', function (req, res, next) {
  const email = req.body.email
  const name = req.body.name
  const text = req.body.text
  console.log(email)
  console.log(name)
  console.log(text)
  sendMail(email, name, text)
  res.sendStatus(200)
})

function sendMail (email, name, text) {
  var message = {
    // sender info
    from: email,

    // Comma separated list of recipients
    to: 'kristof.dsantos@gmail.com',

    // Subject of the message
    subject: 'portfolio - from ' + name + ' mail ' + email,

    // plaintext body
    text: text
  }
  transport.sendMail(message, function (error) {
    if (error) {
      console.log('Error occured')
      console.log(error.message)
      return
    }
    console.log('Message sent successfully!')

    // if you don't want to use this transport object anymore, uncomment following line
    // transport.close(); // close the connection pool
  })
}

export default router
