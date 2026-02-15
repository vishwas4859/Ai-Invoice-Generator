import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { clerkMiddleware } from '@clerk/express'
import { connectDB } from './config/db.js'
import invoiceRouter from './routes/invoiceRouter.js'
import path from 'path'
import businessProfileRouter from './routes/businessProfileRouter.js'
import aiInvoiceRouter from './routes/aiInvoiceRouter.js'

const app = express()
const port = process.env.PORT || 4000;


// MIDDLEWARES
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174','https://ai-invoice-generator.vercel.app'],
    credentials: true
}))
app.use(clerkMiddleware())
// app.use(express.json({limit: "20mb"}))
// app.use(express.urlencoded({ limit: "20mb", extended: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// DB
connectDB();

// ROUTES
app.use('/uploads', express.static(path.join(process.cwd(), "uploads")));

app.use('/api/invoice', invoiceRouter)
app.use('/api/businessProfile', businessProfileRouter)
app.use('/api/ai', aiInvoiceRouter)

app.get('/', (req, res) => {
    res.send("API WORKING")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})