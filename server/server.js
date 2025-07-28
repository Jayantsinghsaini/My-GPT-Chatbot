import express from 'express'
import { initializeApp } from './controllers/chatController.js'
import router from './routes/chatRoutes.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.text())
app.use(express.json())
app.use(cors())
app.use('/',router)

initializeApp()
.then(() => {
    app.listen(port,()=>{
        console.log(`app is listening at http://localhost:${port}`)
    })
})
.catch(error => console.error(error))
