const express= require('express');
const cors =require('cors');
const bodyparse= require('body-parser');
const app =express();
const rutas=require('./app');
const { Router } = require('express');
const configMensaje = require('./configMensaje');

const router= Router();

app.use(cors());
app.use(bodyparse.urlencoded({extended:false}));
app.use(bodyparse.json());
 
//app.use('/',rutas);

app.use(express.static(process.cwd()+"/Angular/dist/login/"));

app.use(router);
router.get('/mensaje', (req, res) => {
    res.send({message:"Sierra Leona, Africa Occidental: aqui esta la API"})    
});
app.post('/formulario', (req, res) => {
    configMensaje(req.body);
    res.status(200).send();
})
app.get('/*', (req,res)=>{
    res.sendFile(process.cwd()+"/Angular/dist/login/index.html")
});

app.listen(3000,()=>{
    console.log('Server en localhost:3000');
});



