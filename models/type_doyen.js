import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;
import uniqueValidator from 'mongoose-unique-validator'; 
const ttype_doyenSchema = new Schema({
    
    intitule:{
        type:String,
        unique: true,
},

   
     
},{timestamps:true}
);
type_doyenSchema.plugin(uniqueValidator);
const Type_doyen= model('type_doyen',type_doyenSchema);
export default Type_doyen;