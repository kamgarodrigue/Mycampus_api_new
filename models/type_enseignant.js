import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;
import uniqueValidator from 'mongoose-unique-validator'; 
const type_enseignantSchema = new Schema({
    
    intitule:{
        type:String,
        unique: true,
},

   
     
},{timestamps:true}
);
type_enseignantSchema.plugin(uniqueValidator);
const Type_universite = model('type_enseignant',type_enseignantSchema);
export default Type_enseignant;