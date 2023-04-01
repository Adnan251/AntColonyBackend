const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', false);

dbURI = "mongodb+srv://adnan251:SNj79fwebZ8BWjVH@cluster0.mjbfzsa.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});