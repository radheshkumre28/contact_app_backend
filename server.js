const express = require('express');

require('dotenv').config();
const { errorHandler } = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const app = express();

connectDb();    

const port = process.env.PORT  || 8080;

app.use(express.json());
app.use('/api/contacts',require('./routes/contactRoutes'));
app.use('/api/users',require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`Server running on ${port}`)
})