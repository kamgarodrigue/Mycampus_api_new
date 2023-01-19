
const express           = require("express")
const mongoose          = require("mongoose")
const morgan            = require("morgan")
const bodyParser        = require("body-parser")  
// AuthRoute         = require("./Routes/Auth")
       const user_route = require("./route/user_route")
mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost:27017/mycampus_new',{useNewUrlParser:true,useUnifiedTopology:true})
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

// https://shielded-falls-07947.herokuapp.com/heroku local web