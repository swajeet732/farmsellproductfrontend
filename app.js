const express = require("express");
const path = require("path");
const app = express();
const port = 5000 ;


//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
try {
    app.use(express.urlencoded())

  }
  catch(err) {
      console.log(err)
   
  }
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
   
    const params = {}
    res.status(200).render('home.pug', params);
})

app.get('/contact', (req, res)=>{
   
    const params = {}
    res.status(200).render('contact.pug', params);
})

app.get('/services', (req, res)=>{
   
    const params = {}
    res.status(200).render('services.pug', params);
})

app.get('/shopping', (req, res)=>{
   
    const params = {}
    res.status(200).render('shopping.pug', params);
})

app.get('/mycart', (req, res)=>{
   
    const params = {}
    res.status(200).render('mycart.pug', params);
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});