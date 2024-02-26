import colors from 'colors'
import dotenv from 'dotenv'
import express from 'express'
import remindersRouter from './src/routes/remindersRouter'

const app = express()
dotenv.config()
app.use(express.json())

const port = process.env.PORT || 8080

app.use('/api/reminders', remindersRouter)

app.listen(port, () => {
  console.log(colors.rainbow(`Backend Running  http://localhost:${port}`).bold)
})
