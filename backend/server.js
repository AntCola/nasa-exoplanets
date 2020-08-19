const express = require('express');
const cors = require('cors');
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

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
