const Chef_departement = require('../models/chef_departement');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
const { json } = require('body-parser');
const { userInfo } = require('node:os');
const fs = require('fs')

const index = (req,res,next)=>{
    Chef_departement.find()
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
            let chef_departement = new Chef_departement({
                tel:req.body.tel,
                email:req.body.email,
                type:req.body.type,
                sexe:req.body.sexe,
                username:req.body.username,
                universite:req.body.universite,
                faculte:req.body.faculte,
                departement:req.body.departement,
                code:req.body.code,
                
    
    
                password:hashedPass
            });
            if(req.file){
                chef_departement.avatar = req.file.path
            }
            chef_departement.save().then(chef_departement =>{
               res.json({
                   message:"Chef de departement creer avec succes"
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
        Chef_departement.findOne({$or:[{email:userName},{phone:userName}]})
        .then(chef_departement=>{
         //   console.log(autorite);
            if(chef_departement){
                bcrypt.compare(password,chef_departement.password,function(err,result){
                    if(err){
                       res.json({
                           error:err,
                       }); 
                    }
                    if(result){
                        let token =jwt.sign({name:chef_departement.userName},'09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a829587fe2f90a832bd3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84df6611',{expiresIn:'1h'})
                        res.json({
                            message:"connexion reussie",token,chef_departement
                            
                        })
                    }else{
                        res.status(404).send({
                            massage:"mot de passe incorecte"
                        })
                    }
        
                });
            }else{
                res.status(404).send({
                    message:"Chef de departement non existant"
                })
            }
        })
    }


    const show =(req,res,next)=>{
        let chefID= req.body.chefID
        Chef_departement.findById(chefID)
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
            console.log(req.body.chefID);
            
            let updateData={
                tel:req.body.tel,
                email:req.body.email,
                type:req.body.type,
                sexe:req.body.sexe,
                username:req.body.username,
                universite:req.body.universite,
                faculte:req.body.faculte,
                departement:req.body.departement,
                code:req.body.code,
                password:password,
            };
            if(req.file){
                updateData.avatar = req.file.path
             
                Chef_departement.findById(updateData.chefID).then(chef_departement=>{
                    console.log(chef_departement);
                    fs.unlink(chef_departement.avatar, (err) => {
                        if (err) {
                        console.error(err)
                        
                        }});
              });
            }
            Chef_departement.findByIdAndUpdate(updateData.chefID,{$set:updateData})
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
         
            let chefID= req.body.chefID
            console.log(chefID);
            Chef_departement.findById(chefID).then(chef_departement=>{
                console.log(chef_departement);
                fs.unlink(chef_departement.avatar, (err) => {
                    if (err) {
                    console.error(err)
                    
                    }});});
                    Chef_departement.findByIdAndRemove(chefID)
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