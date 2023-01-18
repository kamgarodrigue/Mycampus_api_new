import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;
import uniqueValidator from 'mongoose-unique-validator'; 
const userSchema = new Schema({
    tel:{
        type:String,
        unique: true,
        require:[true," Le champ intituler ne peut etre vide"]
    },
    email:{
        type:String,
        require:[true," Le champ email ne peut etre vide"],
        match: [/.+\@.+\..+/," email incorecte"],
    },
    password:{
        type:String,
        
        require:[true," Le champ password ne peut etre vide"]
    },
   
    sexe:{
        type:String,
        lowercase:true,
       require:[true," Le champ intituler ne peut etre vide"]
    },
    username:{
        type:String,
        require:[true," Le champ intituler ne peut etre vide"]
    },
    
    avatar:{
        type:String,
    },
    code:{
        type:String,
        require:[true," Le champ intituler ne peut etre vide"]

    },
      
    
    
     
    
   
     
},{timestamps:true}
);
userSchema.plugin(uniqueValidator);
const User = model('user',userSchema);
export default User;