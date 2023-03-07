const Annonce = require('../models/annonce');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
const { json } = require('body-parser');
const { userInfo } = require('node:os');
const fs = require('fs');
const { response } = require('express');

const faculte_controller = require("./faculte_controller");
const Faculte = require('../models/faculte')

const index = (req,res,next)=>{
    Annonce.find()
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

const store = (req,res,next)=>{
    storing(req,res);
}


const show =(req,res,next)=>{
    let annonceID=req.body.annonceID

    Annonce.findById(annonceID)
    .then(reponse =>{
        if(reponse){
            res.json({
                reponse
            })
        }else{
            res.status(404).send({
                message:"Annonce non existant"
            })
        }
    }).catch(error=>{
        res.json({
            message:'une erreur est survenu!'
        })
    })
}

const update = (req,res,next) =>{
    let updateInfo={
        titre:req.body.titre,
        description:req.body.description,
        minsup:req.body.minsup,
        universite:req.body.universite,
        faculte:req.body.faculte,
        departement:req.body.departement,
        filiere:req.body.filiere,
        type:req.body.type,
        etat:req.body.etat,
        id_annoncer:id_annoncer,
    };

    var path1 = '';
    if(req.files){
        Annonce.findById(req.body.annonceID).then(annonce=>{
           path1 = annonce.document + ',';
           console.log("premier :" +path1);

           req.files.forEach(function(files,index,array) {
                path1 = path1 + files.path +',';
             });
            path1 =path1.substring(0,path1.lastIndexOf(","))
            console.log("yo " + path1);
            updateInfo.document = path1;

                Annonce.findByIdAndUpdate(req.body.annonceID,{$set:updateInfo})
                 .then(response=>{
                    res.json({
                        message:'modification effectuer avec success',
                    })
                })
                .catch(error =>{
                    res.json({
                        message:'une erreur est survenu lors de la modification de votre compte' 
                })
            })
        });
    }
}

const destroy =(req,res,next)=>{
var path ='';
let annonceID=req.body.annonceID
Annonce.findById(req.body.annonceID)
    .then(response =>{
        path =response.document.split(',')
//
//supression
Annonce.findByIdAndRemove(annonceID)
.then(response =>{
  
path.forEach(path=>{
    fs.unlink(path, (err) => {
        if (err) {
            console.error(err)
        }});
})
    res.json({
        message:'Annonce supprimer avec succes',
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

const ByMinsup =(req,res,next)=>{
    var minsup = req.body.minsup;
    Annonce.find({minsup:minsup})
    .then(annonce=>{
        if(annonce){
            res.json({
                annonce
            })
        }
    })
    .catch(error=>{
        res.json({
            message:error
        })
    })
}

const ByUniversite =(req,res,next)=>{
    var universite = req.body.universite;
    Annonce.find({universite:universite})
    .then(annonce=>{
        if(annonce){
            res.json({
                annonce
            })
        }
    })
    .catch(error=>{
        res.json({
            message:error
        })
    })
}

const ByFaculte =(req,res,next)=>{
    var faculte = req.body.faculte;
    Annonce.find({faculte:faculte})
    .then(annonce=>{
        if(annonce){
            res.json({
                annonce
            })
        }
    })
    .catch(error=>{
        res.json({
            message:error
        })
    })
}

const ByDepartement =(req,res,next)=>{
    var departement = req.body.departement;
    Annonce.find({departement:departement})
    .then(annonce=>{
        if(annonce){
            res.json({
                annonce
            })
        }
    })
    .catch(error=>{
        res.json({
            message:error
        })
    })
}

const ByFiliere =(req,res,next)=>{
    var filiere = req.body.filiere;
    Annonce.find({filiere:filiere})
    .then(annonce=>{
        if(annonce){
            res.json({
                annonce
            })
        }
    })
    .catch(error=>{
        res.json({
            message:error
        })
    })
}
module.exports={
    index,destroy,show,store,update,ByMinsup,ByUniversite,ByFaculte,ByDepartement,ByFiliere
}

/****************************************function for adding annonces**************************************/
function storing(request,res){

    var facs = null;

    switch(request.body.code)
    {
        case "codeRecteur" : 
                var Annonces;

                var doc = "none";

                var titre = request.body.titre;
                var description = request.body.description;
                var minsup = request.body.minsup;
                var universite = request.body.universite;
                var departement = request.body.departement;
                var filiere = request.body.filiere;
                var type = request.body.type;
                var etat = request.body.etat;
                var code = request.body.code;

                if(request.files){
                    let path ='';
                    request.files.forEach(function(files,index,array) {
                        path = path + files.path +',';
                    });
                    path =path.substring(0,path.lastIndexOf(","))
                    doc = path;
                }else{
                    doc = "none"
                }

                    Annonces = request.body.Chosen.map(chose => {

                        return {
                            titre:titre,
                            description:description,
                            minsup:minsup,
                            universite:universite,
                            faculte:chose,
                            departement:departement,
                            filiere:filiere,
                            type:type,
                            etat:etat,
                            document:doc,
                            id_annoncer:id_annoncer,
                        };
                    });

            Annonce.insertMany(Annonces)
                .then(() => {
                console.log("Enregistre avec success");
                res.status(200).json("Enregistre avec success");
                })
                .catch(err => res.status(400).json("Error: " + err));

        case "codeDoyen" : 
                var Annonces;

                var doc = "none";

                var titre = request.body.titre;
                var description = request.body.description;
                var minsup = request.body.minsup;
                var universite = request.body.universite;
                var faculte = request.body.faculte;
                var filiere = request.body.filiere;
                var type = request.body.type;
                var etat = request.body.etat;
                var code = request.body.code;

                if(request.files){
                    let path ='';
                    request.files.forEach(function(files,index,array) {
                        path = path + files.path +',';
                    });
                    path =path.substring(0,path.lastIndexOf(","))
                    doc = path;
                }else{
                    doc = "none"
                }

                    Annonces = request.body.Chosen.map(chose => {

                        return {
                            titre:titre,
                            description:description,
                            minsup:minsup,
                            universite:universite,
                            faculte:faculte,
                            departement:chose,
                            filiere:filiere,
                            type:type,
                            etat:etat,
                            document:doc,
                            id_annoncer:id_annoncer,
                        };
                    });

            Annonce.insertMany(Annonces)
                .then(() => {
                console.log("Enregistre avec success");
                res.status(200).json("Enregistre avec success");
                })
                .catch(err => res.status(400).json("Error: " + err));

    }
}