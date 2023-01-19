
const express           = require("express")
const mongoose          = require("mongoose")
const morgan            = require("morgan")
const bodyParser        = require("body-parser")  
// AuthRoute         = require("./Routes/Auth")
       


const user_route = require("./route/user_route")
const chef_departement_route = require("./route/chef_departement_route")
const doyen_route = require("./route/doyen_route")
const faculte_route = require("./route/faculte_route")
const lieu_route = require("./route/lieu_route")
const minsup_route = require("./route/minsup_route")

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://127.0.0.1:27017/MycampusPro',{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch((err) => console.log(err ));
const db = mongoose.connection
const app= express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//app.use('/upload',express.static('upload'))
const port = process.env.port || 5000
app.listen(port,()=>{

});


app.use('/api/users',user_route);
app.use('/api/chefDepartement',chef_departement_route);
app.use('/api/doyen',doyen_route);
app.use('/api/faculte',faculte_route);
app.use('/api/lieu',lieu_route);
app.use('/api/minsup',minsup_route);

// https://shielded-falls-07947.herokuapp.com/heroku local web