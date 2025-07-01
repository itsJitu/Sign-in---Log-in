const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./route/user.route") 

const app = express();

app.use(express.json());

mongoose
.connect("mongodb+srv://diwakarkumar9451:q25VWZnOQD6z7ea1@cluster0.cbg1gqz.mongodb.net/Login")
.then(() => console.log('DB Connected SuccessFully'))
.catch(err => console.log('Error Connecting database', err));

// api
app.use("/api/v1",userRoutes);


const port = 8080;
app.listen(port, () => console.log(`server is up & running at port ${port}`));