const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
var  uniqueValidator  = require ('mongoose-unique-validator') ; 
const type_annonceSchema = new Schema({
    
    intitule:{
        type:String,
        unique: true,
},  
     
},{timestamps:true}
);
type_annonceSchema.plugin(uniqueValidator);
const Type_annonce = mongoose.model('type_annonce',type_annonceSchema);
module.exports = Type_annonce;