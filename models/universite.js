const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
var  uniqueValidator  = require ('mongoose-unique-validator') ; 
const universiteSchema = new Schema({
    intitule:{
        type:String,
        unique: true,
        require:[true," Le champ intituler ne peut etre vide"]
    },
    email:{
        type:String,
        unique: true,
        match: /.+\@.+\..+/,
    
    },
     lat:{
        type:Number,
        require:[true," Le champ latitude  ne peut etre vide"]

         }, 
    long:{
      type:Number,
      require:[true," Le champ longitude ne peut etre vide"]

    },
    logo:{
        type:String
    },
    destription:{
        type:String,
        
    },
    address:{
        type:String
    },
    type:{
        type:String,
        require:[true," Le champ type ne peut etre vide"]

    },
     
},{timestamps:true}
);
universiteSchema.plugin(uniqueValidator);
const Universite = mongoose.model('universite',universiteSchema);
module.exports = Universite;