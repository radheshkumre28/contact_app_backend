const express = require('express');

require('dotenv').config();
const { errorHandler } = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');

connectDb();    
const app = express();

const port = process.env.PORT  || 8080;

app.use(express.json());
app.use('/api/contacts',require('./routes/contactRoutes'));
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`Server running on ${port}`)
})