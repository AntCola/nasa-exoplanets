const express = require('express');
const cors = require('cors');
//Helps us connect to mongoDB database
const mongoose = require('mongoose');
//Configures environment variables
require('dotenv').config();

//Create express server
const app = express();
const port = process.env.PORT || 5000;

//Cors Middleware
app.use(cors());
//Allows us to parse json
app.use(express.json());

const uri = process.env.ATLAS_URI;
//Pass in our uri to connect to db
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connected to successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
