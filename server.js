const express = require('express');
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 4444;

const posts = require('./routes/api/posts');
const register = require('./routes/api/register');
const login = require('./routes/api/login');

//Middlewares
app.use(express.json());

app.use('/api/posts',posts);
app.use('/api/user/register',register);
app.use('/api/user/login',login);

app.listen(PORT,() => console.log(`Server listening on ${PORT}`));