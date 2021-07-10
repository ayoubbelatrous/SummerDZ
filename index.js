
//lib imports 

const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const User = require('./Models/user');
const Product = require('./Models/product');
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const session = require('express-session');

//main port
const port = 8080;

//connection string to monogoDB
const dbURI = 'mongodb+srv://ayoub:ayoubas12345@summerc.oknpj.mongodb.net/summerdb?retryWrites=true&w=majority';

//connect to database
//comment in case you want to start server without database
mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true})
.then((results) =>{console.log('connected to mongo')
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});}).catch((err) =>{console.log(err)});






// initilize express
app = express();
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));



//Un comment in case you want to start server without database
/*
if (app.listen(port)){
  console.log('http://localhost:8080')
}
*/

app.get('/',(req,res) =>{

  res.render('store');
}); 



app.get('/signin',(req,res) =>{
  res.render('signup')
});



app.get('/signup',(req,res) =>{
  res.render('signup')
});



  // Currently we dont have authentication
  /*
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  //TODO: check if user already exists in database

  try {
    const hashedPassword = await dcrypt.hash(password,10);
    user = new User({username,email,hashedPassword});
    console.log('registered')
    res.redirect('/')
  } catch {
    app.redirect('/signup')
  }*/


  
app.get('/ar/signup',(req,res) =>{
  res.render('ar/signup');
})


app.get('/ar/signin',(req,res) =>{
  res.render('ar/signin');
})



app.get('/ar',(req,res) =>{
  res.render('ar/store');
})


app.get('/p',(req,res) =>{
  res.render('product');
})

