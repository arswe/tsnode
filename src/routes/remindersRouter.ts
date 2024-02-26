import { Router } from 'express'
import { getReminderById, getReminders } from '../controllers/remindersController'

const router = Router()

router.route('/').get(getReminders)
router.route('/:id').get(getReminderById)

export default router
