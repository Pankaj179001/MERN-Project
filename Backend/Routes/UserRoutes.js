const express = require("express");
const bcrypt = require("bcrypt");
const UserRouter = express.Router();
const UserModel = require("../Models/User");
const jwt=require('jsonwebtoken')
const { body, validationResult } = require("express-validator");

//signUp
UserRouter.post(
  "/createuser",
  body("email", "Invalid email").isEmail(),
  body("password", "wrong password").isLength({ min: 5 }),
  async (req, res) => {
    const alreadyExist = await UserModel.find({ email: req.body.email });
    if (alreadyExist[0] == undefined) {
      if (!validationResult(req).isEmpty()) {
        return res.status(400).json({ errors: validationResult(req).array() });
      }
      var { name, location, email, password } = req.body;
      password = await bcrypt.hash(password, 10);
      const body = { name, location, email, password };
      const newUser = await UserModel.create({ ...body });
      res.json({ success: true, data: newUser });
    } else {
      res.json({ success: false });
    }
  } 
);

UserRouter.post("/login", async (req, res) => {
  const user = await UserModel.findOne({ email: req.body.email });
  // console.log(user);
  if (!user) {
    return res.json({ login: "failed", msg: "user not found" });
  }
  const comparePassword = await bcrypt.compare(
    req.body.password,
    user.password
  );
  if (!comparePassword) {
    return res.json({ login: "failed", msg: "wrong password" });
  }
  const token=jwt.sign({...user},"secretkey",{expiresIn:"2h"})
  return res.json({ login: "success", msg: "Login Successfully",Token:token });
});

UserRouter.get("/me",(req,res)=>{
  const headers=req.headers.authorization
  const token=headers.split(' ')[1]
if(token){
  const userInfo=jwt.verify(token,"secretkey")
  return res.json({data:userInfo._doc})
}
else{
  return new Error("no security token passed")
}
})
module.exports = UserRouter;
