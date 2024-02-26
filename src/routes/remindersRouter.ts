import { Router } from 'express'
import { CreateReminderDto } from '../dto/CreateReminderDto'

const router = Router()

router.get('/', (req, res) => {
  res.send('Hello reminders!')
})

router.post('/', (req, res) => {
  const { title } = req.body as CreateReminderDto
  res.send(`Creating reminder with title: ${title}`)
})

export default router
