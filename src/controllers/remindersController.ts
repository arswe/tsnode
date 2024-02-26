// @docs  Fetch All reminder
// @Route GET /api/reminders
// @access  Public

import asyncHandler from '../middlewares/asyncHandler'

const getReminders = asyncHandler(async (req, res) => {
  res.send('Hello reminders!')
})

export { getReminders }
