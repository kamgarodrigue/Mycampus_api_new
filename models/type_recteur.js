const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
var  uniqueValidator  = require ('mongoose-unique-validator') ; 

const type_recteurSchema = new Schema({
    
    intitule:{
        type:String,
        unique: true,
},


   
     
},{timestamps:true}
);
type_recteurSchema.plugin(uniqueValidator);
const Type_recteur = mongoose.model('type_recteur',type_recteurSchema);
module.exports =  Type_recteur;
