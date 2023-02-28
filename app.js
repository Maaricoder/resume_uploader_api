import express, { application } from 'express'
import dotev from 'dotenv'
import cors from 'cors'
import bodyparser from 'body-parser'
import upload from './middleware/upload.middleware.js'

dotev.config();


const app = express();

// cors policy 
app.use(cors())

// for parsing application
app.use(express.json());

// multer use


// Port and database url dotenv file
const port=process.env.PORT ||8000
const DATA_URl = process.env.DATA_URL

// database import
import DBconnet from './config/connectdb.js'
DBconnet(DATA_URl)

// import router from './routes/candidateRoutes'
import candidateRoutes from './routes/candidateRoutes.js'

// app.use(upload.single("profile-photo"))

app.use('/api',candidateRoutes)







app.listen(port,()=>{
    console.log(`server is listling port ${port}`)
})