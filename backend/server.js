const express = require('express')
const app = express()
require('dotenv').config()
const fileUpload = require('express-fileupload')
const cloudinary = require('cloudinary').v2
const port = process.env.PORT
const cors = require('cors')
const http = require('http')

const server = http.createServer(app)


app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174',],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    credentials: true
}))
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(express.json())
app.use(fileUpload())
const isprod = process.env.NODE_ENV === 'production'
if (!isprod) {
    app.use(express.static('public'))
}
app.use(`/api/user`,require('./routes/userRoutes'))
server.listen(() => console.log(`server runnig on http://localhost:${port}`))