import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"

// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// DB connection
connectDB();



// Api endpoint
app.use("/api/food", foodRouter)

app.get("/", (req, res)=> {
    res.send("Api Working")
})

app.listen(port, ()=> {
    console.log(`server started on http://localhost:${port}`)
})

// mongodb+srv://foodie_express:foodie_express@cluster0.gevrnpe.mongodb.net/?
// retryWrites=true&w=majority&appName=Cluster0
