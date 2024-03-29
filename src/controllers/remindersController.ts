import asyncHandler from '../middlewares/asyncHandler'

// @docs    Fetch All reminder
// @Route   GET /api/reminders
// @access  Public

const getReminders = asyncHandler(async (req, res) => {
  res.send('reminders!')
})

// @docs    Fetch Single reminder
// @Route   GET /api/reminders/:id
// @access  Public

const getReminderById = asyncHandler(async (req, res) => {
  res.send('reminder')
})

// @docs    Create reminder
// @Route   POST /api/reminders
// @access  Private

const createReminder = asyncHandler(async (req, res) => {
  res.send('reminder')
})

// @docs    Update reminder
// @Route   PUT /api/reminders/:id
// @access  Private

const updateReminder = asyncHandler(async (req, res) => {
  res.send('reminder')
})

// @docs    Delete reminder
// @Route   DELETE /api/reminders/:id
// @access  Private

const deleteReminder = asyncHandler(async (req, res) => {
  res.send('reminder')
})

// @docs    Get top reminders
// @Route   GET /api/reminders/top
// @access  Public

const getTopReminders = asyncHandler(async (req, res) => {
  res.send('reminder')
})

// @docs    Create new reminder review
// @Route   POST /api/reminders/:id/reviews
// @access  Private

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
