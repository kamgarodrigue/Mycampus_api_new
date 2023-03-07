
const express           = require("express")
const mongoose          = require("mongoose")
const morgan            = require("morgan")
const bodyParser        = require("body-parser")  
// AuthRoute         = require("./Routes/Auth")
const cors  = require("cors")

       


const user_route = require("./route/user_route")
const faculte_route = require("./route/faculte_route")
const universite_route = require("./route/universite_route")
const lieu_route = require("./route/lieu_route")
const type_user_route = require("./route/type_user_route")
const type_universite_route = require("./route/type_universite_route")
const type_lieu_route = require("./route/type_lieu_route")
const annonce_route = require("./route/annonce_route")
const type_annonce_route = require("./route/type_annonce_route")

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://127.0.0.1:27017/MycampusPro',{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((err) => console.log(err ));
const db = mongoose.connection
const app= express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

//app.use('/upload',express.static('upload'))
const port = process.env.port || 5000
app.listen(port,()=>{

});


app.use('/api/users',user_route);
app.use('/api/faculte',faculte_route);
app.use('/api/universite',universite_route);
app.use('/api/lieu',lieu_route);
app.use('/api/typeUser',type_user_route);
app.use('/api/typeUniversite',type_universite_route);
app.use('/api/typeLieu',type_lieu_route);
app.use('/api/annonce',annonce_route);
app.use('/api/typeAnnonce',type_annonce_route);

// https://shielded-falls-07947.herokuapp.com/heroku local web