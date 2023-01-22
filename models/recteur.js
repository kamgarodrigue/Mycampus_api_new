const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
var  uniqueValidator  = require ('mongoose-unique-validator') ; 

const recteurSchema = new Schema({
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
    
    username:{
        type:String,
        require:[true," Le champ intituler ne peut etre vide"]
    },
    universite:{
        type:String,
        require:[true," Le champ universite ne peut etre vide"]

    },

   
    avatar:{
        type:String,
        require:[true," Le champ universite ne peut etre vide"]

    },
    code:{
        type:String,
        require:[true," Le champ universite ne peut etre vide"]

    },

      
    
    
     
    
   
     
},{timestamps:true}
);
recteurSchema.plugin(uniqueValidator);
const Recteur = mongoose.model('recteur',recteurSchema);
module.exports =  Recteur;