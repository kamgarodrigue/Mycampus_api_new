const Faculte = require('../models/faculte')
const mongoose =require('mongoose')
const fs = require('fs')

//voir la liste des faculte
const index = (req,res,next)=>{
    Faculte.find()
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
    let faculteID =req.body.faculteID
    Faculte.findById(faculteID)
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
    let faculte= new Faculte({
        intitule:req.body.intitule,
        universite:req.body.universite,
        lat:req.body.lat,
        long:req.body.long,
        destription:req.body.destription,  
    })
    if(req.files){
        let path ='';
        req.files.forEach(function(files,index,array) {
            path = path + files.path +',';
        });
        path =path.substring(0,path.lastIndexOf(","))
        faculte.image = path;
    }
  faculte.save()
        .then(response =>{
            console.log(response);
             
            res.json({
                message:'faculte creer avec succes',
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
    var image="";
    let faculteID =req.body.faculteID
    let updateData={
        intitule:req.body.intitule,
        universite:req.body.universite,
        lat:req.body.lat,
        long:req.body.long,
        destription:req.body.destription,  
    }
    
    Faculte.findByIdAndUpdate(faculteID,{$set:updateData})
.then(response =>{
    res.json({
        message:'Faculte modifier  avec succes',
        
  })
})
.catch(error =>{
   res.json({
       message:'une erreur est survenu lors de la modification du lieu'
   })
})
    

}

updateimage=(req,res,next)=>{
    let faculteID=req.body.faculteID;
    var path ='';
    Faculte.findById(req.body.faculteID)
    .then(response =>{
        path =response.image.split(',')});
}
   
const destroy =(req,res,next)=>{
    var path ='';
let faculteID=req.body.faculteID
Faculte.findById(req.body.faculteID)
    .then(response =>{
        path =response.image.split(',')
//
//supression
Faculte.findByIdAndRemove(faculteID)
.then(response =>{
  
path.forEach(path=>{
    fs.unlink(path, (err) => {
        if (err) {
            console.error(err)
        }});
})
    res.json({
        message:' faculte supprimer   avec succes',
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