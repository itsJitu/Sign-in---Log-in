const loginModel = require("../model/user.model");



const Login = (req, res) => {
    
    res.json({
        success: true,
        message: "create login api"
    })
};

 const Registration = async (req, res) => {
    // to save v the user details in db
    console.log(req.body);
    await loginModel.create(req.body);
    res.json({
        success: true,
        message: "create Registration api"
    })
};

const userController = {
    Login,
    Registration
};

module.exports = userController;