const express = require("express");
const router = express.Router();
const query = require("../query/user");


router.get("/users",async (req,res,next)=>{
    try{
        const usernames =await query.fetchUsers();
        console.log(usernames);
        res.json(usernames); 

    }
    catch(err){
        res.status(500);
        console.log(err);
    }
});


 router.post("/userLog",async(req,res)=>{
     try{
         const id=await query.userLogIn(req.body.username,req.body.password);
         console.log(id);
         res.json(id);
     }
     catch(err){
        console.log(err);
     }
    
 })


router.put("/updateUser",async (req,res)=>{
   try{
    const username=req.body.username;
    const password=req.body.password;
    const id=req.body.id;
    await query.updateUserById(id,username,password);
   }
   catch(err){
    console.log(err);
   }
  
    
})

router.delete("/deleteUser",async(req,res)=>{
    try{
        await query.deleteUserById(req.body.id);
    }
    catch(err){
        console.log(err);
    }
  
})

router.post("/registerUser",async (req,res)=>{
    try{
        await query.registerUser(req.body.username,req.body.password);
    }
    catch(err){
        console.log(err);
    }
})

module.exports = router;