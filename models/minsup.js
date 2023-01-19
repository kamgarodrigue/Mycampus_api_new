const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
var  uniqueValidator  = require ('mongoose-unique-validator') ; 

const minsupSchema = new Schema({
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
   
    sexe:{
        type:String,
        lowercase:true,
       require:[true," Le champ intituler ne peut etre vide"]
    },
    username:{
        type:String,
        require:[true," Le champ intituler ne peut etre vide"]
    },
    
    avatar:{
        type:String,
    },
    code:{
        type:String,
        require:[true," Le champ intituler ne peut etre vide"]

    },
      
    
    
     
    
   
     
},{timestamps:true}
);
minsupSchema.plugin(uniqueValidator);
const Minsup = mongoose.model('minsup',minsupSchema);
module.exports =  Minsup;