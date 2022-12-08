const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
// REGISTER
router.post("/register", async (req,res)=>{
    
    const {username, email, password} = req.body;
    
    const newUser = new User({
        username,
        email,
        password:CryptoJS.AES.encrypt(password,process.env.PASS_SEC).toString(),
    });

    
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
});

// LOGIN
router.post("/login", async (req,res) => {
    try{
        const { username } = req.body;
        const user =  await User.findOne({username});
        !user && res.status(401).json("wrong credentials!");
        const hashedPassword = CryptoJS.AES.decrypt(
            user.password, 
            process.env.PASS_SEC
        );
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        OriginalPassword !== req.body.password && res.status(401).json("Wrong credentials!");
        const { password , ...others} = user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
})
module.exports = router;