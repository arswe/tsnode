import asyncHandler from '../middlewares/asyncHandler'

// @docs  Fetch All reminder
// @Route GET /api/reminders
// @access  Public

const getReminders = asyncHandler(async (req, res) => {
  res.send('reminders!')
})

const getReminderById = asyncHandler(async (req, res) => {
  res.send('reminder')
})

const createReminder = asyncHandler(async (req, res) => {
  res.send('reminder')
})

const updateReminder = asyncHandler(async (req, res) => {
  res.send('reminder')
})

const deleteReminder = asyncHandler(async (req, res) => {
  res.send('reminder')
})

const getTopReminders = asyncHandler(async (req, res) => {
  res.send('reminder')
})

export { createReminder, deleteReminder, getReminderById, getReminders, updateReminder }
