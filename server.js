const express = require('express');

const dotenv = require('dotenv');

const app = express();

const port = process.env.PORT  || 4747;

app.listen(port, ()=>{
    console.log(`Server running on ${port}`)
})