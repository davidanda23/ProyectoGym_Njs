const express = require('express');
const configMensaje = require('./configMensaje');
const app = express();

const fireadmin=require('firebase-admin');


var serviceAccount = require('./proyectogym-58d3f-firebase-adminsdk-fdvnu-656a9cfb39.json');
const { Router}= require('express');
const router = Router();

fireadmin.initializeApp({
    credential: fireadmin.credential.cert(serviceAccount),
    databaseURL: 'https://proyectogym-58d3f.firebaseio.com/' 
});

router.get('/mensaje', (req, res) => {
    res.send("Hola Mundo")    
});



app.post('/formulario', (req, res) => {
 configMensaje(req.body);
 res.status(200).send();
})


module.exports=router;