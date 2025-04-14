import express from "express";
import {logout,login,register} from "../controllers/auth.js"

const router = express.Router()
router.post("/login",login)
router.post("/logout",logout)
router.post("/signup",register)

export {logout,login,register}