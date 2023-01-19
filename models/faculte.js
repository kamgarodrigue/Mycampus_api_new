const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
var  uniqueValidator  = require ('mongoose-unique-validator') ; 

const faculteSchema = new Schema({
    intitule:{
        type:String,
        unique: true,
        require:[true," Le champ intituler ne peut etre vide"]
    },
    universite:{
        type:String,
        require:[true," Le champ universite ne peut etre vide"]

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
        
    },
   
     
},{timestamps:true}
);
faculteSchema.plugin(uniqueValidator);
const Faculte = mongoose.model('faculte',faculteSchema);
module.exports =  Faculte;