import express from 'express'
import multer from 'multer'
import { clerkMiddleware } from '@clerk/express'
import path from 'path'
import fs from 'fs'
import { createBusinessProfile, getMyBusinessProfile, updateBusinessProfile } from '../controllers/businessProfileController.js';

const businessProfileRouter = express.Router();

businessProfileRouter.use(clerkMiddleware());

// //Ensure the uploads directory exists
// const uploadDir = path.join(process.cwd(), "uploads");
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true });
// }

// multer storage
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, path.join(process.cwd(), "uploads"));
//     },
//     filename: (req, file, cb) => {
//         const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
//         const ext = path.extname(file.originalname);
//         cb(null, `business-${unique}${ext}`);
//     },
// })

// const upload = multer({storage});

// Use Memory Storage instead of Disk Storage
const storage = multer.memoryStorage();
const upload = multer({ 
    storage,
    limits: { 
        fieldSize: 25 * 1024 * 1024, // 25MB limit for text fields (Base64 data)
        fileSize: 10 * 1024 * 1024   // 10MB limit for actual file uploads
     } // 5MB limit for Vercel stability
});

// create
businessProfileRouter.post(
    "/",
    upload.fields([
        {name: "logoName", maxCount: 1},
        {name: "stampName", maxCount: 1},
        {name: "signatureNameMeta", maxCount: 1},
    ]),
    createBusinessProfile
)

// to update
businessProfileRouter.put(
    "/:id",
    upload.fields([
        {name: "logoName", maxCount: 1},
        {name: "stampName", maxCount: 1},
        {name: "signatureNameMeta", maxCount: 1},
    ]),
    updateBusinessProfile
)

businessProfileRouter.get("/me", getMyBusinessProfile)

export default businessProfileRouter;