const User = require('../models/u');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
const { json } = require('body-parser');
const { userInfo } = require('node:os');
const fs = require('fs')

const index = (req,res,next)=>{
    User.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message:error
        })
    })
    }

const register=(req,res,next)=>{
    bcrypt.hash(req.body.password,10,function(err,hashedPass){
        if(err){
            res.json({
                error:err
            });
        }
        let user = new User({
            tel:req.body.tel,
            email:req.body.email,
            type:req.body.type,
            sexe:req.body.sexe,
            username:req.body.username,
            universite:req.body.universite,
            faculte:req.body.faculte,
            departement:req.body.departement,
            filiere:req.body.filiere,
            


            password:hashedPass
        });
        if(req.file){
            user.avatar = req.file.path
        }
        user.save().then(user =>{
           res.json({
               message:"visiteur creer avec succes"
           })
        }).catch(error=>{
               res.json({
                   error:error.message,
               })
        });

    });
    
}
const  login =(req,res,next)=>{
    var userName= req.body.email;
    var password = req.body.password;
    User.findOne({$or:[{email:userName},{phone:userName}]})
    .then(user=>{
     //   console.log(autorite);
        if(user){
            bcrypt.compare(password,user.password,function(err,result){
                if(err){
                   res.json({
                       error:err,
                   }); 
                }
                if(result){
                    let token =jwt.sign({name:user.userName},'09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611',{expiresIn:'1h'})
                    res.json({
                        message:"connexion reussie",token,user
                        
                    })
                }else{
                    res.status(404).send({
                        massage:"mot de passe incorecte"
                    })
                }
    
            });
        }else{
            res.status(404).send({
                message:"utilisateur non existant"
            })
        }
    })
}
const show =(req,res,next)=>{
    let userID= req.body.userID
    User.findById(userID)
    .then(response =>{
        
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message:'une erreur est survenu!'
        })
    })
    }
    const update =(req,res,next) =>{
        console.log(req.body.userID);
        
        let updateData={
            tel:req.body.tel,
            email:req.body.email,
            type:req.body.type,
            sexe:req.body.sexe,
            username:req.body.username,
            universite:req.body.universite,
            faculte:req.body.faculte,
            departement:req.body.departement,
            filiere:req.body.filiere,
            password:password,
        };
        if(req.file){
            updateData.avatar = req.file.path
         
            User.findById(updateData.userID).then(user=>{
                console.log(user);
                fs.unlink(user.avatar, (err) => {
                    if (err) {
                    console.error(err)
                    
                    }});
          });
        }
        User.findByIdAndUpdate(updateData.userID,{$set:updateData})
    .then(response =>{
        res.json({
            message:'modification effectuer avec success',
      })
    })
    .catch(error =>{
       res.json({
           message:'une erreur est survenu lors de la modification de votre compte'
       })
    })
    }
   
    const destroy =(req,res,next)=>{
     
        let userID= req.body.userID
        console.log(userID);
        User.findById(userID).then(user=>{
            console.log(user);
            fs.unlink(user.avatar, (err) => {
                if (err) {
                console.error(err)
                
                }});});
                User.findByIdAndRemove(userID)
        .then(response =>{
          
            res.json({
                message:'personaliter  supprimer   avec succes',
          })
        })
        .catch(error =>{
           res.json({
               message:'une erreur est survenu lors de la suppression de la personaliter'
           })
        })
        }
module.exports ={
    register,login,index,show,update,destroy
}