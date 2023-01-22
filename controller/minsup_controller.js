const Minsup = require('../models/minsup');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
const { json } = require('body-parser');
const { userInfo } = require('node:os');
const fs = require('fs')

const index = (req,res,next)=>{
    Minsup.find()
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
            let minsup = new Minsup({
                tel:req.body.tel,
                email:req.body.email,
                sexe:req.body.sexe,
                username:req.body.username,
                code:req.body.code,
    
                password:hashedPass
            });
            if(req.file){
                minsup.avatar = req.file.path
            }
            minsup.save().then(minsup =>{
               res.json({
                   message:"Minsup creer avec succes"
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
        minsup.findOne({$or:[{email:userName},{phone:userName}]})
        .then(minsup=>{
            if(minsup){
                bcrypt.compare(password,minsup.password,function(err,result){
                    if(err){
                       res.json({
                           error:err,
                       }); 
                    }
                    if(result){
                        let token =jwt.sign({name:minsup.userName},'09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611',{expiresIn:'1h'})
                        res.json({
                            message:"connexion reussie",token,minsup
                            
                        })
                    }else{
                        res.status(404).send({
                            massage:"mot de passe incorecte"
                        })
                    }
        
                });
            }else{
                res.status(404).send({
                    message:"Minsup non existant"
                })
            }
        })
    }


    const show =(req,res,next)=>{
        let minsupID= req.body.minsupID
        Minsup.findById(minsupID)
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
            console.log(req.body.minsupID);
            
            let updateData={
                tel:req.body.tel,
                email:req.body.email,
                sexe:req.body.sexe,
                username:req.body.username,
                code:req.body.code,
                password:password,
            };
            if(req.file){
                updateData.avatar = req.file.path
             
                Minsup.findById(updateData.minsupID).then(minsup=>{
                    console.log(minsup);
                    fs.unlink(minsup.avatar, (err) => {
                        if (err) {
                        console.error(err)
                        
                        }});
              });
            }
            Minsup.findByIdAndUpdate(updateData.minsupID,{$set:updateData})
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
         
            let minsupID= req.body.minsupID
            console.log(minsupID);
            Minsup.findById(minsupID).then(minsup=>{
                console.log(minsup);
                fs.unlink(minsup.avatar, (err) => {
                    if (err) {
                    console.error(err)
                    
                    }});});
                    Minsup.findByIdAndRemove(minsupID)
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

    //announce...