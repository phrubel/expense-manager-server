// import package
const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');

// config dot env file
dotenv.config();

// rest objects
const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// routes
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Expense Tracker Server!!!</h1>');
});

// ports
const PORT = 8080 || process.env.PORT;
// listen Server
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
