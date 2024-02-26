import { Router } from 'express'
import { getReminderById, getReminders } from '../controllers/remindersController'

const router = Router()

router.get('/').get(getReminders).post(getReminderById)

export default router
