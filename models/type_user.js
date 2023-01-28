const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
var  uniqueValidator  = require ('mongoose-unique-validator') ; 
const type_userSchema = new Schema({
    
    type_user:{
        type:String,
        unique: true,
},
    num_reference:{
        type:String,
    },

    
},{timestamps:true}
);
type_userSchema.plugin(uniqueValidator);
const Type_user = mongoose.model('type_user',type_userSchema);
module.exports = Type_user;