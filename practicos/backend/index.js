const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const multer = require('multer')
const fs = require('fs')
const path = require('path')
const cors = require('cors')
require('dotenv').config()
const routes = require('./routes/index')

const uploadDirectory = path.join(__dirname, 'uploads')
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory)
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
})
const upload = multer({storage})

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/task/uploadFile', upload.single('file'), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({
      error: 'File not found',
      success: false,
    })
  }

  res.status(200).json({
    message: 'Successfully uploaded',
    success: true,
    file: file.filename,
    path: `/uploads/${file.filename}`
  })
})
app.use('/api/', routes)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))


mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB')
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}!`)
  })
}).catch((error) => console.error('Error en la conexión:', error))