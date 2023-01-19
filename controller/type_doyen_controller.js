const Type_doyen = require('../models/type_doyen');
const jwt = require('jsonwebtoken');
const { json } = require('body-parser');
const { userInfo, type } = require('node:os');
const fs = require('fs')

const index = (req,res,next)=>{
    Type_doyen.find()
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
            let type_doyen = new Type_doyen({
                intitule : req.body.intitule
            });
            console.log(req.body.intitule)
            type_doyen.save().then(type_doyen =>{
               res.json({
                   message:"Type_doyen creer avec succes"
               })
            }).catch(error=>{
                   res.json({
                       error:error.message,
                   })
            });
    }

    const show =(req,res,next)=>{
        let type_doyenID = req.body.type_doyenID

        Type_doyen.findById(type_doyenID)
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
            console.log(req.body.type_doyenID);
            
            let updateData={
                intitule:req.body.intitule,
            };

            Type_doyen.findByIdAndUpdate(updateData.type_doyenID,{$set:updateData})
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
         
            let type_doyenID = req.body.type_doyenID
            Type_doyen.findById(type_doyenID).then(type_doyen=>{
                console.log(type_doyen);
                });
                    Type_doyen.findByIdAndRemove(type_doyenID)
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