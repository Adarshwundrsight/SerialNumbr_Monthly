import express from "express"
import {generateotp,matchOTP,getAll} from "../controller/otp.js"

const router=express.Router();


router.post('/getmonthly',generateotp);
router.post('/verifymonthly',matchOTP);
    

export default router;