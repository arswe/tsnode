import { Router } from 'express'
import {
  createReminder,
  createReminderReview,
  deleteReminder,
  getReminderById,
  getReminders,
  getTopReminders,
  updateReminder,
} from '../controllers/remindersController'

const router = Router()

router.route('/').get(getReminders).post(createReminder)
router.route('/:id/reviews').post(createReminderReview)
router.route('/top').post(getTopReminders)
router.route('/:id').get(getReminderById).put(updateReminder).delete(deleteReminder)

export default router
