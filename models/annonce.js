const mongoose  = require('mongoose');
const Schema = mongoose.Schema;
var  uniqueValidator  = require ('mongoose-unique-validator') ; 
const annonceSchema = new Schema({

    titre:{
        type:String,
        require:[true," Le champ titre ne peut etre vide"]
    },
    description:{
        type:String,
        require:[true," Le champ description ne peut etre vide"]
    },
    minsup:{
        type:String
    },
    universite:{
        type:String
    },
    faculte:{
        type:String
    },
    departement:{
        type:String
    },
    filiere:{
        type:String
    },
    type:{
        type:String,
        require:[true," Le champ type ne peut etre vide"]
    },
    document:{
        type:String,
    },
    etat:{
        type:String,
        require:[true," Le champ description ne peut etre vide"]
    },
    code:{
        type:String,
        require:[true," Le champ description ne peut etre vide"]
    },

},{timestamps:true}
);
annonceSchema.plugin(uniqueValidator);
const Annonce = mongoose.model('annonce',annonceSchema);
module.exports =  Annonce;