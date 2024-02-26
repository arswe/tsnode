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
})

const updateReminder = asyncHandler(async (req: Request, res: Response) => {
  res.send('reminder')
})

const deleteReminder = asyncHandler(async (req: Request, res: Response) => {
  res.send('reminder')
})

const getTopReminders = asyncHandler(async (req: Request, res: Response) => {
  res.send('reminder')
})

const createReminderReview = asyncHandler(async (req: Request, res: Response) => {
  res.send('reminder')
})

export { createReminder, getReminderById, getReminders, updateReminder }
