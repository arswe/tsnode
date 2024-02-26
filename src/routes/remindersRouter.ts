import { Router } from 'express'
import { createReminder, getReminderById, getReminders } from '../controllers/remindersController'

const router = Router()

router.route('/').get(getReminders).post(createReminder)
router.route('/:id').get(getReminderById)

export default router
