import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;
import uniqueValidator from 'mongoose-unique-validator'; 
const type_universiteSchema = new Schema({
    
    intitule:{
        type:String,
        unique: true,
},

   
     
},{timestamps:true}
);
type_universiteSchema.plugin(uniqueValidator);
const Type_universite = model('type_universite',type_universiteSchema);
export default Type_universite;