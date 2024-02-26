import asyncHandler from '../middlewares/asyncHandler'

// @docs  Fetch All reminder
// @Route GET /api/reminders
// @access  Public

const getReminders = asyncHandler(async (req, res) => {
  res.send('reminders!')
})

// @docs  Fetch Single reminder
// @Route GET /api/reminders/:id
// @access  Public

const getReminderById = asyncHandler(async (req, res) => {
  res.send('reminder')
})

// @docs  Create reminder
// @Route POST /api/reminders
// @access  Private

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

const createReminderReview = asyncHandler(async (req, res) => {
  res.send('reminder')
})

export {
  createReminder,
  createReminderReview,
  deleteReminder,
  getReminderById,
  getReminders,
  getTopReminders,
  updateReminder,
}
