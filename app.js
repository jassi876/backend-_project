const express= require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://cluster0:8766263593%40Jk@cluster0.tjqmln6.mongodb.net/test",
).then(()=> console.log("connected ...."))
.catch(()=>console.log("not connected"))
