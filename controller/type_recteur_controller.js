const Type_recteur = require('../models/type_recteur');
const jwt = require('jsonwebtoken');
const { json } = require('body-parser');
const { userInfo, type } = require('node:os');
const fs = require('fs')

const index = (req,res,next)=>{
    Type_recteur.find()
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
            let type_recteur = new Type_recteur({
                intitule : req.body.intitule
            });
            console.log(req.body.intitule)
            type_recteur.save().then(type_recteur =>{
               res.json({
                   message:"Type recteur creer avec succes"
               })
            }).catch(error=>{
                   res.json({
                       error:error.message,
                   })
            });
    }

    const show =(req,res,next)=>{
        let type_recteurID = req.body.type_recteurID

        Type_recteur.findById(type_recteurID)
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
            console.log(req.body.type_recteurID);
            
            let updateData={
                intitule:req.body.intitule,
            };

            Type_recteur.findByIdAndUpdate(req.body.type_recteurID,{$set:updateData})
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
         
            let type_recteurID = req.body.type_recteurID
            Type_recteur.findById(type_recteurID).then(type_recteur=>{
                console.log(type_recteur);
                });
                    Type_recteur.findByIdAndRemove(type_recteurID)
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