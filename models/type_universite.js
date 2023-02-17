const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
var  uniqueValidator  = require ('mongoose-unique-validator') ; 

const type_universiteSchema = new Schema({
    
    intitule:{
        type:String,
        unique: true,
},

   
     
},{timestamps:true}
);

type_universiteSchema.plugin(uniqueValidator);
const Type_universite = mongoose.model('type_universite',type_universiteSchema);
module.exports =  Type_universite;