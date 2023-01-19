const Type_user = require('../models/type_user');
const jwt = require('jsonwebtoken');
const { json } = require('body-parser');
const { userInfo, type } = require('node:os');
const fs = require('fs')

const index = (req,res,next)=>{
    Type_user.find()
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

    const store=(req,res,next)=>{
            let type_users = new Type_user({
                type_user : req.body.type_user
            });
            console.log(req.body.type_user)
            type_users.save().then(type_users =>{
               res.json({
                   message:"type_user creer avec succes"
               })
            }).catch(error=>{
                   res.json({
                       error:error.message,
                   })
            });
    }

    const show =(req,res,next)=>{
        let type_userID = req.body.type_userID

        Type_user.findById(type_userID)
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
            console.log(req.body.type_userID);
            
            let updateData={
                type_user:req.body.type_user,
            };

            Type_user.findByIdAndUpdate(req.body.type_userID,{$set:updateData})
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
         
            let type_userID = req.body.type_userID
            Type_user.findById(type_userID).then(type_users=>{
                console.log(type_users);
                });
                    Type_user.findByIdAndRemove(type_userID)
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
        store,index,show,update,destroy
    }