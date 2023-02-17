const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
var  uniqueValidator  = require ('mongoose-unique-validator') ; 
const type_lieuSchema = new Schema({
    
    intitule:{
        type:String,
        unique: true,
},  
     
},{timestamps:true}
);
type_lieuSchema.plugin(uniqueValidator);
const Type_lieu = mongoose.model('type_lieu',type_lieuSchema);
module.exports = Type_lieu;