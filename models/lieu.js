const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
var  uniqueValidator  = require ('mongoose-unique-validator') ; 
const lieuSchema = new Schema({
    intitule:{
        type:String,
        unique: true,
        require:[true," Le champ intituler ne peut etre vide"]
    },
    universite:{
        type:String,
        require:[true," Le champ universite ne peut etre vide"]

    },
   faculté:{
        type:String,
        require:[true," Le champ universite ne peut etre vide"]

    },
    departement:{
        type:String,
        
    },
    image:{
        type:String,
    },
     lat:{
        type:Number,
        require:[true," Le champ latitude  ne peut etre vide"]

         }, 
    long:{
      type:Number,
      require:[true," Le champ longitude ne peut etre vide"]

    },
    
    destription:{
        type:String,
        require:[true," Le champ longitude ne peut etre vide"]

    },
    type:{
        type:String,
        
    },
    
    
   
     
},{timestamps:true}
);
lieuSchema.plugin(uniqueValidator);
const Lieu = mongoose.model('lieu',lieuSchema);
module.exports = Lieu;