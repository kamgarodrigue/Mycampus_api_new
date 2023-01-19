const Lieu = require('../models/lieu')
const mongoose =require('mongoose')
const fs = require('fs')

//voir la liste des lieux
const index = (req,res,next)=>{
    Lieu.find()
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
    let lieuID =req.body.lieuID
    Lieu.findById(lieuID)
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
    let lieu= new Lieu({
        intitule:req.body.intitule,
        universite:req.body.universite,
        faculte:req.body.faculte,
        departement:req.body.departement,
        lat:req.body.lat,
        long:req.body.long,
        destription:req.body.destription,  
        type:req.body.type,  
    })
    if(req.files){
        let path ='';
        req.files.forEach(function(files,index,array) {
            path =path +files.path +',';
        });
        path =path.substring(0,path.lastIndexOf(","))
        lieu.image = path;
    }
  lieu.save()
        .then(response =>{
            console.log(response);
             
            res.json({
                message:'lieu creer avec succes',
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
    let lieuID =req.body.lieuID
    let updateData={
        intitule:req.body.intitule,
        universite:req.body.universite,
        faculte:req.body.faculte,
        departement:req.body.departement,
        lat:req.body.lat,
        long:req.body.long,
        destription:req.body.destription,  
        type:req.body.type,   
    }
    
    Lieu.findByIdAndUpdate(lieuID,{$set:updateData})
    .then(response =>{
    res.json({
        message:'Lieu modifier  avec succes',
        
  })
})
.catch(error =>{
   res.json({
       message:'une erreur est survenu lors de la modification du lieu'
   })
})
    

}

updateimage=(req,res,next)=>{
    let lieuID=req.body.lieuID;
    var path ='';
    Lieu.findById(req.body.lieuID)
    .then(response =>{
        path =response.image.split(',')});
}
   
const destroy =(req,res,next)=>{
    var path ='';
let lieuID=req.body.lieuID
Lieu.findById(req.body.lieuID)
    .then(response =>{
        path =response.image.split(',')
//
//supression
Lieu.findByIdAndRemove(lieuID)
.then(response =>{
  
path.forEach(path=>{
    fs.unlink(path, (err) => {
        if (err) {
            console.error(err)
        }});
})
    res.json({
        message:' lieu supprimer   avec succes',
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