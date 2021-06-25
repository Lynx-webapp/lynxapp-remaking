const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
// Accueil
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/home',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/acceuil',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

// Guidelines

router.get('/guidelines',function(req,res){
  res.sendFile(path.join(__dirname+'/guidelines.html'));
});

router.get('/users/@me',function(req,res){
  res.sendFile(path.join(__dirname+'/guidelines.html'));
});

// Chat

router.get('/users',function(req,res){
  res.sendFile(path.join(__dirname+'/main.ejs'));
});

router.get('/chat',function(req,res){
  res.sendFile(path.join(__dirname+'/main.ejs'));
});

router.get('/tchat',function(req,res){
  res.sendFile(path.join(__dirname+'/main.ejs'));
});

//add the router
app.use('/', router);

app.listen(process.env.PORT || 3000, (e)=> {
    if(e) throw e
    console.log(`[Serveur]: started successfully at localhost:${process.env.PORT || 3000}`)
})

require('./engine')(app, require('express'))
