import { Request, Response } from 'express'
import asyncHandler from '../middlewares/asyncHandler'

// @docs  Fetch All reminder
// @Route GET /api/reminders
// @access  Public

const getReminders = asyncHandler(async (req: Request, res: Response) => {
  res.send('reminders!')
})

const getReminderById = asyncHandler(async (req: Request, res: Response) => {
  res.send('reminder')
})


const createReminder = asyncHandler(async (req: Request, res: Response) => {
  res.send('reminder')
}


  export { getReminderById, getReminders }

