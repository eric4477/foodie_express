import express from "express";
import { addFood } from "../controllers/foodController.js";
import multer from "multer";
import { connectDB } from "../config/db.js";

const foodRouter = express.Router();

// image storage engine
const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb)=> {
        return connectDB(null, `${date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add", upload.single("image"), addFood)



export default foodRouter;
