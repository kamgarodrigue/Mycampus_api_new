const Type_universite = require('../models/type_universite');
const jwt = require('jsonwebtoken');
const { json } = require('body-parser');
const { userInfo, type } = require('node:os');
const fs = require('fs')

const index = (req,res,next)=>{
    Type_universite.find()
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
            let type_universite = new Type_universite({
                intitule : req.body.intitule
            });
            console.log(req.body.intitule)
            type_universite.save().then(type_universite =>{
               res.json({
                   message:"type_universite creer avec succes"
               })
            }).catch(error=>{
                   res.json({
                       error:error.message,
                   })
            });
    }

    const show =(req,res,next)=>{
        let type_universiteID = req.body.type_universiteID

        Type_universite.findById(type_universiteID)
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
            console.log(req.body.type_universiteID);
            
            let updateData={
                intitule:req.body.intitule,
            };

            Type_universite.findByIdAndUpdate(req.body.type_universiteID,{$set:updateData})
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
         
            let type_universiteID = req.body.type_universiteID
            Type_universite.findById(type_universiteID).then(type_universite=>{
                console.log(type_universite);
                });
                    Type_universite.findByIdAndRemove(type_universiteID)
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