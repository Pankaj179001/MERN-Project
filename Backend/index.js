const express = require("express");
const app = express();
const cors=require('cors')
const userRouter = require("./Routes/UserRoutes");
const foodItems=require("./Routes/food_itemsRouter")
const mongoDb = require("./db");
app.use(express.json());
app.use(cors({ origin:"*",credentials:true,optionsSuccessStatus:200}))
app.use(express.urlencoded({ extended: true }));

app.use("/api", userRouter);
app.use("/api", foodItems);
app.listen(1200);
