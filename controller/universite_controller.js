const Universite = require('../models/universite')
const mongoose =require('mongoose')
const fs = require('fs')
const { response } = require('express')

//voir la liste des faculte
const index = (req,res,next)=>{
    Universite.find()
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

//rechercher par id...
const show =(req,res,next)=>{
    let univID =req.body.univID
    Universite.findById(univID)
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


const store =(req,res,next)=>{
    let universite= new Universite({
        intitule:req.body.intitule,
        email:req.body.email,
        lat:req.body.lat,
        long:req.body.long,
        destription:req.body.destription, 
        address:req.body.address,
        type:req.body.type,
    })
    if(req.files){
        let path ='';
        req.files.forEach(function(files,index,array) {
            path = path + files.path +',';
        });
        path =path.substring(0,path.lastIndexOf(","))
        universite.logo = path;
    }
  universite.save()
        .then(response =>{
            console.log(response);
             
            res.json({
                message:'Universite creer avec succes',
                response
          })
        })
       .catch(error =>{
           res.json({
               message:error
           })
       })
}


const update =(req,res,next) =>{
    var logo="";
    let univID =req.body.univID
    let updateData={
        intitule:req.body.intitule,
        email:req.body.email,
        lat:req.body.lat,
        long:req.body.long,
        destription:req.body.destription, 
        address:req.body.address,
        type:req.body.type,
        
    }
    Universite.findById(univID)
    .then(response =>{
        res.json({
            response
        })
    })
    if(response == null)
    {
        if(req.files){
        let path = response.logo + ",";
        req.files.forEach(function(files,index,array) {
            path = path + files.path +',';
        });
        path =path.substring(0,path.lastIndexOf(","))
        updateData.logo = path;
        }
    }else{
        if(req.files){
            let path = '';
            req.files.forEach(function(files,index,array) {
                path = path + files.path +',';
            });
            path =path.substring(0,path.lastIndexOf(","))
            updateData.logo = path;
            }
    }
    
    Universite.findByIdAndUpdate(univID,{$set:updateData})
.then(response =>{
    res.json({
        message:'Universite modifier  avec succes',
        
  })
})
.catch(error =>{
   res.json({
       message:'une erreur est survenu lors de la modification du lieu'
   })
})
    

}

/*updateimage=(req,res,next)=>{
    let faculteID=req.body.faculteID;
    var path ='';
    Faculte.findById(req.body.faculteID)
    .then(response =>{
        path =response.image.split(',')});
}*/
   
const destroy =(req,res,next)=>{
    var path ='';
let univID=req.body.univID
Universite.findById(req.body.univID)
    .then(response =>{
        path =response.logo.split(',')
//
//supression
Universite.findByIdAndRemove(univID)
.then(response =>{
  
path.forEach(path=>{
    fs.unlink(path, (err) => {
        if (err) {
            console.error(err)
        }});
})
    res.json({
        message:' Universite supprimer avec succes',
  })
})
.catch(error =>{
   res.json({
       message:'une erreur est survenu lors de la suppression du lieu'
   })
})
        
    })
    .catch(error =>{
        res.json({
            message:error.message==="Cannot read property 'split' of null" ? 'image non existante':error.message,
        })
    })

}
module.exports={
    index,destroy,show,store,update
}