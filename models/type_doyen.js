const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
var  uniqueValidator  = require ('mongoose-unique-validator') ; 

const type_doyenSchema = new Schema({
    
    intitule:{
        type:String,
        unique: true,
},
   
},{timestamps:true}
);

type_doyenSchema.plugin(uniqueValidator);
const Type_doyen = mongoose.model('type_doyen',type_doyenSchema);
module.exports =  Type_doyen;