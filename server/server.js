import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import './config/dotenv.js';
import router from './routes/routes.js';
import setup from './config/setup.js';

setup()

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

// specify the api path for the server to use
app.use('/api', router)


app.get('/', (req, res) => {
    res.send('<h1>Virtual Spaces API</h1>')
})


app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})