
//lib imports 

const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const User = require('./Models/user');
const Product = require('./Models/product')
const bcrypt = require('bcrypt');
const passport = require('passport');




//main port
const port = 8080;


//connection string to monogoDB
const dbURI = 'mongodb+srv://ayoub:ayoubas12345@summerc.oknpj.mongodb.net/summerdb?retryWrites=true&w=majority';
//connect to database
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


//routes
app.get('/',(req,res) =>{

  res.render('store');
}); 

app.get('/signin',(req,res) =>{
  res.render('signin');
})

app.get('/signup',(req,res) =>{
  res.render('signup')
})

app.post('/signup',async(req,res) =>{

  const username = req.body.username
  const email = req.body.email
  const password = req.body.password
  
  if(!username) res.redirect('/signup')
  if(!email) res.redirect('/signup')
  if(!password) res.redirect('/signup')


  try {
    const hashedPassword = await bcrypt.hash(password,10);
    const user = new User({username: username,email: email,password: hashedPassword});
    user.save();

    res.redirect('/signin');

  } catch (err){

    console.log(err)
    res.redirect('/signup');

  }

})



app.get('/admin',(req,res) =>{

  res.render('admin');
});

    //admin product submit post route
app.post('/admin',(req,res) =>{

    //get product data from form
    const name = req.body.productname;
    const price = req.body.price;
    const quantity = req.body.quantity;
    const description = req.body.description ;
    const content = req.body.productcontent;

    //create new database product
    const product = new Product({
      name,
      description,
      price,
      quantity,
      content
    });

    //store product in database
    product.save();
    res.render('admin')
});








  
