import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;
import uniqueValidator from 'mongoose-unique-validator'; 
const falculteSchema = new Schema({
    intitule:{
        type:String,
        unique: true,
        require:[true," Le champ intituler ne peut etre vide"]
    },
    universite:{
        type:String,
        require:[true," Le champ universite ne peut etre vide"]

    },
    image:{
        type:String,
    },
     lat:{
        type:Number,
        require:[true," Le champ latitude  ne peut etre vide"]

         }, 
    long:{
      type:Number,
      require:[true," Le champ longitude ne peut etre vide"]

    },
    
    destription:{
        type:String,
        
    },
   
     
},{timestamps:true}
);
universiteSchema.plugin(uniqueValidator);
const Falculte = model('falculte',falculteSchema);
export default Falculte;