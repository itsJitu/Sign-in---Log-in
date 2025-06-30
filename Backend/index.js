const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const addloginRoutes = require("./routes/addlogin.routes")
const addregisterRoutes = require("./routes/addregister.routes")
const app = express();
const PORT = 8080


//Cors
const corsOptions = {
    origin : "http://localhost5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credential:true,
}



mongoose
.connect(
    "mongodb+srv://diwakarkumar9451:q25VWZnOQD6z7ea1@cluster0.cbg1gqz.mongodb.net/Register&Login"
)
.then(() => console.log("database connected successfully "))
.catch((error) => console.log(`${error}`));

//for json datatype
app.use(express.json());
app.use(cors(corsOptions));

//Api
app.use("/api", addregisterRoutes);
app.use("api/", addloginRoutes);



app.listen(
    PORT,
    console.log(`server is up running at http://localhost:${PORT}`)
)