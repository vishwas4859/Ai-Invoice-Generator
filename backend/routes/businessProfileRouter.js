import express from 'express';
import multer from 'multer';
import path from 'path';

import { clerkMiddleware } from '@clerk/express';

const businessProfileRouter  = express.Router();

businessProfileRouter.use(clerkMiddleware());

//multer setup

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,path.join(process.cwd),"uploads");

    },
    filename
})