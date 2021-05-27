const express = require('express');


const app = express();

app.get('/' , (req,res) =>{
  res.send("hi there");
})

const PORT = process.env.PORT || 5000;
//if there is env port from heroku is set use that or 5000

app.listen(PORT);