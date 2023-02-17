const Type_lieu = require('../models/type_lieu');
const jwt = require('jsonwebtoken');
const { json } = require('body-parser');
const { userInfo, type } = require('node:os');
const fs = require('fs')

const index = (req,res,next)=>{
    Type_lieu.find()
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
            let type_lieu = new Type_lieu({
                intitule : req.body.intitule
            });
            console.log(req.body.intitule)
            type_lieu.save().then(type_lieu =>{
               res.json({
                   message:"Type_lieu creer avec succes"
               })
            }).catch(error=>{
                   res.json({
                       error:error.message,
                   })
            });
    }

    const show =(req,res,next)=>{
        let type_lieuID = req.body.type_lieuID

        Type_lieu.findById(type_lieuID)
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
            console.log(req.body.type_lieuID);
            
            let updateData={
                intitule:req.body.intitule,
            };

            Type_lieu.findByIdAndUpdate(req.body.type_lieuID,{$set:updateData})
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
         
            let type_lieuID = req.body.type_lieuID
            Type_lieu.findById(type_lieuID).then(type_lieu=>{
                console.log(type_lieu);
                });
                Type_lieu.findByIdAndRemove(type_lieuID)
                        .then(response =>{
                            res.json({
                                message:'suppression effectue avec succes',
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