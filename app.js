const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
require('dotenv').config(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname,'/build')));


const todoRoute = require('./routes/todo');
app.use('/todo', todoRoute);


app.get('/*',function(req,res){
  res.sendFile(path.join(__dirname,'/build/index.html'));
})
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((error) => {
      console.error("Error connecting to DB:", error);
    });
  
  const PORT = process.env.PORT || 4000;
  
  app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`);
  });