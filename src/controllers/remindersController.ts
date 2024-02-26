import { Request, Response } from 'express'
import asyncHandler from '../middlewares/asyncHandler'

// @docs  Fetch All reminder
// @Route GET /api/reminders
// @access  Public

const getReminders = asyncHandler(async (req: Request, res: Response) => {
  res.send('Hello reminders!')
})

const getReminderById = asyncHandler(async (req: Request, res: Response) => {
  res.send('Hello reminders!')
})

export { getReminderById, getReminders }
