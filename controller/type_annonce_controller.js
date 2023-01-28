const Type_annonce = require('../models/type_annonce');
const jwt = require('jsonwebtoken');
const { json } = require('body-parser');
const { userInfo, type } = require('node:os');
const fs = require('fs')

const index = (req,res,next)=>{
    Type_annonce.find()
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
            let type_annonce = new Type_annonce({
                intitule : req.body.intitule
            });
            console.log(req.body.intitule)
            type_annonce.save().then(type_annonce =>{
               res.json({
                   message:"Type_annonce creer avec succes"
               })
            }).catch(error=>{
                   res.json({
                       error:error.message,
                   })
            });
    }

    const show =(req,res,next)=>{
        let type_annonceID = req.body.type_annonceID

        Type_annonce.findById(type_annonceID)
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
            console.log(req.body.type_annonceID);
            
            let updateData={
                intitule:req.body.intitule,
            };

            Type_annonce.findByIdAndUpdate(req.body.type_annonceID,{$set:updateData})
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
         
            let type_annonceID = req.body.type_annonceID
            Type_annonce.findById(type_annonceID).then(type_annonce=>{
                console.log(type_annonce);
                });
                Type_annonce.findByIdAndRemove(type_annonceID)
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