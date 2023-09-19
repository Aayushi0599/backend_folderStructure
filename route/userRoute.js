import  express  from "express";
import {logOut, loginUser, registerUser, updateUserPassword} from "../controllers/userController.js"
const router=express.Router();


router.post("/register" ,registerUser)
router.post("/login" ,loginUser)
router.get("/logout" ,logOut)
router.post("/update-password" ,updateUserPassword)


export default router