const express = require("express");
const userRoutes = require("./routes/user");
const cors =require("cors");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(userRoutes);
app.listen(3000);