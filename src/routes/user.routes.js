import { Router } from "express";
import {registerUser} from "../controllers/user.controller.js";
    
import { upLoad } from "../middleware/multer.middleware.js";

const router=Router()

router.route("/register").post(
    upLoad.fields([
        {
            name: "avatar",
            maxCount: 1
        }, 
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
    )

export default router