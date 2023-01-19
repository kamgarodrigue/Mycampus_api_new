const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
var  uniqueValidator  = require ('mongoose-unique-validator') ; 

const chef_departementSchema = new Schema({
    tel:{
        type:String,
        unique: true,
        require:[true," Le champ intituler ne peut etre vide"]
    },
    email:{
        type:String,
        require:[true," Le champ email ne peut etre vide"],
        match: [/.+\@.+\..+/," email incorecte"],
    },
    password:{
        type:String,
        
        require:[true," Le champ password ne peut etre vide"]
    },
    type:{
        type:String,
        
        require:[true," Le champ type ne peut etre vide"]
    },
    sexe:{
        type:String,
        lowercase:true,
        require:[true," Le champ sexe ne peut etre vide"]
    },
    username:{
        type:String,
        require:[true," Le champ username ne peut etre vide"]
    },
    universite:{
        type:String,
        require:[true," Le champ universite ne peut etre vide"]

    },

   faculte:{
        type:String,
        require:[true," Le champ faculté ne peut etre vide"]

    },
    departement:{
        type:String,
        require:[true," Le champ departement ne peut etre vide"]

    },
    
    avatar:{
        type:String,
    },
    code:{
        type:String,
    },
    
    
     
    
   
     
},{timestamps:true}
);
chef_departementSchema.plugin(uniqueValidator);
const Chef_departement = mongoose.model('chef_departement',chef_departementSchema);
module.exports =  Chef_departement;