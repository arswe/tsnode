import { Router } from 'express'
import { getReminders } from '../controllers/remindersController'
import { CreateReminderDto } from '../dto/CreateReminderDto'

const router = Router()

router.get('/').get(getReminders)



export default router
