import { Router } from 'express'

const router = Router()

router.post('/mail', function (req, res, next) {
  const email = req.body.email
  const name = req.body.name
  const text = req.body.text
  console.log(email)
  console.log(name)
  console.log(text)
  res.sendStatus(200)
})

export default router
