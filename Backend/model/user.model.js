const mongoose = require("mongoose");

const userSchema = mongoose.Schema({    
    name: {
        type: String
    },
    password: {
        type: String
    },
    email:{
        type: String
    }
});

const loginModel = mongoose.model("users", userSchema);

module.exports = loginModel;
