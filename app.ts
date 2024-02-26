import colors from 'colors'
import express from 'express'
import remindersRouter from './src/routes/remindersRouter'

const app = express()
const port = 8080

app.use('/api/reminders', remindersRouter)

app.listen(port, () => {
  console.log(colors.rainbow(`Backend Running  http://localhost:${port}`).bold)
})
